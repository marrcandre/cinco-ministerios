# Changelog

## [3.0.0] — 2026-07-07

### Adicionado

- Camada de infraestrutura (`src/infrastructure/storage/`)
- `localStorage` adapter: `saveSession`, `loadSession`, `clearSession`, `saveResult`, `loadResult`, `clearResult`, `clearAll`
- 13 testes de infraestrutura (persistência, limpeza, dados inválidos, JSON malformado)
- Documento `docs/infrastructure.md`

## [2.0.0] — 2026-07-07

### Adicionado

- Camada de aplicação (`src/application/`)
- `TestSession`: criação, respostas com validação, verificação de conclusão
- `calculateResult()`: caso de uso que invoca o domínio para pontuação
- 20 testes de aplicação (test-session + calculate-result)
- Documento `docs/application.md`

### Alterado

- Roadmap atualizado com Sprint 2

## [1.2.0] — 2026-07-07

### Alterado

- Removido campo redundante `slug` da interface `MinistryInfo` e dos dados dos ministérios

### Adicionado

- `src/tests/domain/ministries.spec.ts` com 8 testes para `getMinistry` (existente, inexistente, erro, slug ausente)

## [1.1.0] — 2026-07-07

### Alterado

- Corrigido mapeamento de ministérios nas alternativas para seguir o gabarito oficial
- Testes expandidos para 49 (40 questions + 8 scoring + 1 placeholder)
- Adicionada validação completa do gabarito nos testes (cada posição de cada pergunta)

### Documentado

- `docs/domain.md`: adicionada seção "Gabarito Oficial" com tabela de mapeamento
- Explicitado que o conteúdo textual das perguntas é dado oficial imutável

## [1.0.0] — 2026-07-07

### Adicionado

- Domínio puro do teste dos Cinco Ministérios em `src/domain/`
- Tipos: Ministry, Question, Option, Answer, MinistryScore
- Dados dos 5 ministérios (apóstolo, profeta, evangelista, pastor, mestre)
- 6 perguntas reais com 5 alternativas cada (uma por ministério)
- Sistema de pontuação (`calculateScores`, `getTopMinistries`)
- 38 testes de domínio (questions.spec.ts + scoring.spec.ts)
- Documento `docs/domain.md`

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
