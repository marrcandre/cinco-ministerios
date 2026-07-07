<script setup lang="ts">
import { ref } from 'vue'
import AppLogo from '@/components/ui/AppLogo.vue'

const pixKey = 'marcoandre@gmail.com'
const copied = ref(false)

async function copyPix() {
  try {
    await navigator.clipboard.writeText(pixKey)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    // clipboard not available
  }
}
</script>

<template>
  <div class="about-view">
    <div class="about-view__hero">
      <AppLogo :size="64" />
      <h1 class="about-view__title">Cinco Ministérios</h1>
      <p class="about-view__hero-subtitle">
        Ferramenta de reflexão sobre os cinco ministérios de Efésios 4:11.
      </p>
    </div>

    <section class="about-view__section">
      <h2 class="about-view__subtitle">Sobre o projeto</h2>
      <p class="about-view__text">
        O Cinco Ministérios é uma ferramenta de reflexão baseada no modelo dos cinco
        ministérios descritos em Efésios 4:11. Seu objetivo é ajudar pessoas a refletirem
        sobre seus possíveis perfis ministeriais e áreas de serviço.
      </p>
      <p class="about-view__text">
        O resultado não é um diagnóstico definitivo, mas um ponto de partida para
        autoconhecimento ministerial, reflexão e conversa.
      </p>
      <ul class="about-view__list">
        <li class="about-view__list-item">uma ferramenta de reflexão;</li>
        <li class="about-view__list-item">uma forma de autoconhecimento ministerial;</li>
        <li class="about-view__list-item">um apoio para reflexão e conversa.</li>
      </ul>
    </section>

    <section class="about-view__section">
      <h2 class="about-view__subtitle">Como funciona</h2>
      <ol class="about-view__steps">
        <li class="about-view__steps-item">
          <strong>Teste rápido</strong> &mdash; responda 6 perguntas objetivas.
        </li>
        <li class="about-view__steps-item">
          <strong>Perguntas de reflexão</strong> &mdash; cada pergunta apresenta 5
          alternativas associadas aos cinco ministérios.
        </li>
        <li class="about-view__steps-item">
          <strong>Cálculo do resultado</strong> &mdash; suas respostas são processadas
          para identificar suas áreas de maior afinidade.
        </li>
        <li class="about-view__steps-item">
          <strong>Apresentação dos cinco ministérios</strong> &mdash; apóstolo, profeta,
          evangelista, pastor e mestre, com descrições detalhadas.
        </li>
      </ol>
    </section>

    <section class="about-view__section">
      <h2 class="about-view__subtitle">Privacidade</h2>
      <ul class="about-view__list">
        <li class="about-view__list-item">não exige login;</li>
        <li class="about-view__list-item">não solicita cadastro;</li>
        <li class="about-view__list-item">não coleta dados pessoais;</li>
        <li class="about-view__list-item">
          o usuário pode compartilhar o resultado voluntariamente.
        </li>
      </ul>
    </section>

    <section class="about-view__section">
      <h2 class="about-view__subtitle">Autor</h2>
      <p class="about-view__text">
        <strong>Marco André Mendes</strong> &mdash; desenvolvedor e criador do projeto
        Cinco Ministérios.
      </p>
      <div class="about-view__links">
        <a
          href="https://github.com/marrcandre"
          class="about-view__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/marrcandre"
          class="about-view__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="mailto:marcoandre@gmail.com"
          class="about-view__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contato
        </a>
      </div>
    </section>

    <section class="about-view__section">
      <h2 class="about-view__subtitle">Código fonte e projetos</h2>
      <p class="about-view__text">
        O projeto é de código aberto. Contribuições e sugestões são bem-vindas.
      </p>

      <div class="about-view__project">
        <h3 class="about-view__project-name">Cinco Ministérios</h3>
        <p class="about-view__project-desc">
          Ferramenta de reflexão baseada em Efésios 4:11 para descoberta de perfil ministerial.
        </p>
        <div class="about-view__project-links">
          <a
            href="https://cinco-ministerios.vercel.app"
            class="about-view__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aplicação
          </a>
          <a
            href="https://github.com/marrcandre/cinco-ministerios"
            class="about-view__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Código fonte
          </a>
        </div>
      </div>

      <div class="about-view__project">
        <h3 class="about-view__project-name">Dons Espirituais</h3>
        <p class="about-view__project-desc">
          Ferramenta de reflexão sobre dons espirituais.
        </p>
        <div class="about-view__project-links">
          <a
            href="https://dons-espirituais.vercel.app"
            class="about-view__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aplicação
          </a>
          <a
            href="https://github.com/marrcandre/dons-espirituais"
            class="about-view__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Código fonte
          </a>
        </div>
      </div>
    </section>

    <section class="about-view__section about-view__section--highlight">
      <h2 class="about-view__subtitle">Apoie este projeto</h2>
      <p class="about-view__text">
        Se esta ferramenta foi útil para você, sua contribuição ajuda na manutenção e
        evolução do projeto.
      </p>
      <div class="about-view__pix">
        <span class="about-view__pix-label">PIX:</span>
        <span class="about-view__pix-value">{{ pixKey }}</span>
        <button
          class="about-view__pix-copy"
          :class="{ 'about-view__pix-copy--copied': copied }"
          @click="copyPix"
        >
          {{ copied ? 'Copiado!' : 'Copiar PIX' }}
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-view {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
  padding: var(--spacing-2xl) 0 var(--spacing-3xl);
  max-width: 40rem;
  margin: 0 auto;
}

.about-view__hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  text-align: center;
  padding-bottom: var(--spacing-md);
}

.about-view__hero-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  max-width: 28rem;
}

.about-view__section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.about-view__section--highlight {
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  background-color: var(--color-surface);
  border: 1px solid var(--color-secondary);
}

.about-view__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  line-height: var(--line-height-tight);
}

.about-view__subtitle {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  line-height: var(--line-height-tight);
}

.about-view__text {
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  line-height: var(--line-height-relaxed);
}

.about-view__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.about-view__list-item {
  position: relative;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  line-height: var(--line-height-relaxed);
}

.about-view__list-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6rem;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: var(--radius-full);
  background-color: var(--color-primary);
}

.about-view__steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.about-view__steps-item {
  position: relative;
  padding-left: var(--spacing-xl);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  line-height: var(--line-height-relaxed);
  counter-increment: step-counter;
}

.about-view__steps-item::before {
  content: counter(step-counter);
  position: absolute;
  left: 0;
  top: 0;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  background-color: var(--color-primary);
  color: #ffffff;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  line-height: 1;
}

.about-view__project {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
}

.about-view__project + .about-view__project {
  margin-top: var(--spacing-md);
}

.about-view__project-name {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
}

.about-view__project-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.about-view__project-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xs);
}

.about-view__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.about-view__link {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-md);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-lg);
  font-family: var(--font-family-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-decoration: none;
  transition: all 0.2s ease;
}

.about-view__link:hover {
  background-color: var(--color-primary);
  color: #ffffff;
}

.about-view__pix {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-lg);
  background-color: var(--color-background);
  border: 1px dashed var(--color-secondary);
  flex-wrap: wrap;
}

.about-view__pix-label {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.about-view__pix-value {
  font-family: monospace;
  font-size: var(--font-size-sm);
  color: var(--color-primary);
}

.about-view__pix-copy {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 2px solid var(--color-secondary);
  border-radius: var(--radius-md);
  background-color: transparent;
  color: var(--color-secondary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all 0.2s ease;
}

.about-view__pix-copy:hover {
  background-color: var(--color-secondary);
  color: #ffffff;
}

.about-view__pix-copy--copied {
  background-color: var(--color-success);
  border-color: var(--color-success);
  color: #ffffff;
}
</style>
