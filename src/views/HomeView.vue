<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { loadSession } from '@/infrastructure/storage/local-storage'
import PageHeader from '@/components/ui/PageHeader.vue'
import AppCard from '@/components/ui/AppCard.vue'
import AppButton from '@/components/ui/AppButton.vue'

const router = useRouter()
const hasSession = ref(false)

onMounted(() => {
  hasSession.value = loadSession() !== null
})

function startNew() {
  router.push('/test')
}

function continueTest() {
  router.push('/test?continue=true')
}
</script>

<template>
  <div class="home-view">
    <PageHeader
      title="Cinco Ministérios"
      description="Descubra seu ministério predominante"
    />

    <AppCard v-if="hasSession" variant="outlined" padding="lg" class="home-view__resume">
      <p class="home-view__resume-text">
        Você possui um teste em andamento. Deseja continuar ou iniciar um novo?
      </p>
      <div class="home-view__resume-actions">
        <AppButton variant="primary" @click="continueTest">
          Continuar teste
        </AppButton>
        <AppButton variant="outline" @click="startNew">
          Iniciar novo teste
        </AppButton>
      </div>
    </AppCard>

    <AppCard v-else padding="lg">
      <p class="home-view__description">
        Este teste ajudará você a identificar seu ministério predominante com base
        no modelo dos Cinco Ministérios descritos em Efésios 4:11.
      </p>
      <p class="home-view__info">
        São 6 perguntas com 5 alternativas cada. Ao final, você verá o ranking
        completo dos ministérios.
      </p>
      <div class="home-view__start">
        <AppButton variant="primary" size="lg" @click="startNew">
          Iniciar teste
        </AppButton>
      </div>
    </AppCard>
  </div>
</template>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  padding-bottom: var(--spacing-3xl);
}

.home-view__description {
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-md);
}

.home-view__info {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-lg);
}

.home-view__start {
  display: flex;
  justify-content: center;
}

.home-view__resume-text {
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-lg);
  line-height: var(--line-height-normal);
}

.home-view__resume-actions {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}
</style>
