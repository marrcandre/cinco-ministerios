# Changelog

## [0.2.0] — 2026-07-07

### Adicionado

- Suporte a Dark Theme (tokens CSS escuros + tema Vuetify escuro)
- Composable `useTheme()` com Light, Dark e System (preferência do SO)
- Componente AppHeader com toggle de tema
- Documento `docs/philosophy.md`
- Princípios de UX no Design System

### Alterado

- Estilos reorganizados em `tokens/`, `theme/`, `globals/`
- `vuetify.ts` movido de `app/plugins/` para `styles/theme/`
- Componentes revisados para usar tokens CSS (sem valores hardcoded)
- AppButton: hover usa variáveis CSS, padding usa tokens de espaçamento
- AppCard: borda usa token de cor, padding usa tokens de espaçamento
- Documentação atualizada (architecture, design-system, decisions, roadmap, changelog)

### Removido

- `src/styles/tokens.css` (substituído por arquivos separados em `tokens/`)
- `src/app/plugins/` (conteúdo movido para `styles/theme/`)

## [0.1.0] — 2026-07-07

### Adicionado

- Inicialização do projeto com Vue 3 + TypeScript + Vite
- Configuração de Vuetify, Tailwind CSS 4, Vue Router, Vitest, ESLint, Prettier
- Estrutura de diretórios
- Design System: tokens, tema Vuetify, componentes base
- Documentação inicial
- Página Dashboard com layout padrão
