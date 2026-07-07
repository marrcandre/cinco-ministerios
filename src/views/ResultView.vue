<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { loadResult } from '@/infrastructure/storage/local-storage'
import { getTopMinistries } from '@/domain/scoring'
import ResultRanking from '@/components/test/ResultRanking.vue'
import MinistryHighlights from '@/components/result/MinistryHighlights.vue'
import AppButton from '@/components/ui/AppButton.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import type { TestResult } from '@/application/calculate-result'

const router = useRouter()
const result = ref<TestResult | null>(null)

const hasSingleHighlight = computed(() => {
  if (!result.value) return true
  return getTopMinistries(result.value.scores).length === 1
})

onMounted(() => {
  result.value = loadResult()
})

function restart() {
  router.push('/')
}
</script>

<template>
  <div class="result-view">
    <div class="result-view__hero">
      <h1 class="result-view__title">Seu Resultado</h1>
      <p class="result-view__subtitle">Ranking dos seus ministérios</p>
    </div>

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
      <section class="result-view__section">
        <ResultRanking :scores="result.scores" />
      </section>

      <section class="result-view__section">
        <h2 class="result-view__section-title">
          {{ hasSingleHighlight ? 'Conheça seu ministério em destaque' : 'Conheça seus ministérios em destaque' }}
        </h2>
        <MinistryHighlights :scores="result.scores" />
      </section>

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
  gap: var(--spacing-lg);
  padding-bottom: var(--spacing-3xl);
  max-width: 32rem;
  margin: 0 auto;
}

.result-view__hero {
  text-align: center;
  padding: var(--spacing-2xl) 0 0;
}

.result-view__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  line-height: 1.2;
}

.result-view__subtitle {
  margin-top: var(--spacing-xs);
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
}

.result-view__section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.result-view__section-title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.result-view__actions {
  display: flex;
  justify-content: center;
  padding-top: var(--spacing-md);
}
</style>
