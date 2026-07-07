<script setup lang="ts">
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__inner">
      <div class="app-footer__brand">
        <span class="app-footer__name">Cinco Ministérios</span>
        <p class="app-footer__description">
          Ferramenta de reflexão sobre os cinco ministérios de Efésios 4:11.
        </p>
      </div>

      <nav class="app-footer__nav">
        <router-link to="/" class="app-footer__link">Início</router-link>
        <router-link to="/test" class="app-footer__link">Teste</router-link>
        <router-link to="/sobre" class="app-footer__link">Sobre</router-link>
      </nav>

      <div class="app-footer__extras">
        <a
          href="https://github.com/marcoandre/cinco-ministerios"
          class="app-footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="mailto:marcoandre@gmail.com"
          class="app-footer__link"
        >
          Contato
        </a>
      </div>

      <div class="app-footer__support">
        <router-link to="/sobre" class="app-footer__support-link">
          Apoie este projeto
        </router-link>
      </div>

      <div class="app-footer__copy">
        <span>Marco André Mendes</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  margin-top: auto;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.app-footer__inner {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  max-width: 1024px;
  margin: 0 auto;
  padding: var(--spacing-xl) var(--spacing-md) var(--spacing-lg);
}

.app-footer__name {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
}

.app-footer__description {
  margin-top: var(--spacing-xs);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-normal);
}

.app-footer__nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.app-footer__extras {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.app-footer__link {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.app-footer__link:hover {
  color: var(--color-primary);
}

.app-footer__support {
  display: flex;
  align-items: center;
}

.app-footer__support-link {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.app-footer__support-link:hover {
  color: var(--color-secondary-hover);
  text-decoration: underline;
}

.app-footer__copy {
  font-size: var(--font-size-xs);
  color: var(--color-text-disabled);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-border);
}
</style>
