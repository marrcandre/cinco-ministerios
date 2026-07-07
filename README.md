# Cinco Ministérios

Teste de Identificação dos Cinco Ministérios.

## Stack

- Vue 3 + TypeScript
- Vite
- Vuetify
- Tailwind CSS 4
- Vue Router
- Vitest

## Scripts

```bash
npm run dev       # Iniciar servidor de desenvolvimento
npm run build     # Build de produção
npm run preview   # Preview do build
npm run lint      # ESLint
npm run format    # Prettier
npm run test      # Vitest
```

## Estrutura

```
src/
  app/          # Configuração (router, plugins, layouts)
  components/   # Componentes Vue (ui/ para Design System)
  composables/  # Composables
  domain/       # Lógica de domínio pura
  modules/      # Módulos da aplicação
  services/     # Serviços (localStorage)
  styles/       # Tokens e estilos globais
  utils/        # Utilitários
  tests/        # Testes
```
