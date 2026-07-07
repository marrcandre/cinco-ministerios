<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { loadSession } from '@/infrastructure/storage/local-storage'
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
    <div class="home-view__hero">
      <h1 class="home-view__title">Cinco Ministérios</h1>
      <p class="home-view__subtitle">
        Descubra quais ministérios de Cristo fluem mais naturalmente através de você.
      </p>
    </div>

    <div class="home-view__card">
      <p class="home-view__description">
        Responda com sinceridade as 6 perguntas a seguir, deixando vir o primeiro
        impulso. Não existem respostas certas ou erradas — apenas características
        que Deus já plantou em você.
      </p>

      <ul class="home-view__list">
        <li class="home-view__list-item">
          Responda sinceramente, sem pensar demais.
        </li>
        <li class="home-view__list-item">
          O resultado mostra tendências e características que podem ser desenvolvidas.
        </li>
      </ul>

      <div class="home-view__start">
        <AppButton variant="primary" size="lg" @click="startNew">
          Iniciar teste
        </AppButton>
      </div>
    </div>

    <div v-if="hasSession" class="home-view__resume">
      <p class="home-view__resume-text">
        Você possui um teste em andamento.
      </p>
      <div class="home-view__resume-actions">
        <AppButton variant="primary" @click="continueTest">
          Continuar teste
        </AppButton>
        <AppButton variant="outline" @click="startNew">
          Iniciar novo teste
        </AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  padding-bottom: var(--spacing-3xl);
  max-width: 32rem;
  margin: 0 auto;
}

.home-view__hero {
  text-align: center;
  padding: var(--spacing-2xl) 0 var(--spacing-xl);
}

.home-view__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  line-height: 1.2;
}

.home-view__subtitle {
  margin-top: var(--spacing-sm);
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.home-view__card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.home-view__description {
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-lg);
}

.home-view__list {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.home-view__list-item {
  position: relative;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.home-view__list-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: var(--radius-full);
  background-color: var(--color-primary);
}

.home-view__start {
  display: flex;
  justify-content: center;
}

.home-view__resume {
  text-align: center;
  padding: var(--spacing-md) 0;
}

.home-view__resume-text {
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
  line-height: var(--line-height-normal);
}

.home-view__resume-actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}
</style>
