<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { loadResult } from '@/infrastructure/storage/local-storage'
import PageHeader from '@/components/ui/PageHeader.vue'
import ResultRanking from '@/components/test/ResultRanking.vue'
import AppButton from '@/components/ui/AppButton.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import type { TestResult } from '@/application/calculate-result'

const router = useRouter()
const result = ref<TestResult | null>(null)

onMounted(() => {
  result.value = loadResult()
})

function restart() {
  router.push('/')
}
</script>

<template>
  <div class="result-view">
    <PageHeader
      title="Seu Resultado"
      description="Ranking dos seus ministérios"
    />

    <EmptyState
      v-if="!result"
      icon="mdi-chart-timeline-variant"
      title="Nenhum resultado"
      message="Complete o teste para ver seu resultado."
    >
      <template #action>
        <AppButton variant="primary" @click="restart">
          Iniciar teste
        </AppButton>
      </template>
    </EmptyState>

    <template v-else>
      <ResultRanking :scores="result.scores" />

      <div class="result-view__actions">
        <AppButton variant="outline" @click="restart">
          Refazer teste
        </AppButton>
      </div>
    </template>
  </div>
</template>

<style scoped>
.result-view {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  padding-bottom: var(--spacing-3xl);
}

.result-view__actions {
  display: flex;
  justify-content: center;
  padding-top: var(--spacing-md);
}
</style>
