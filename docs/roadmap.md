# Roadmap

## Sprint 0 — Fundação

- [x] Inicializar projeto Vue 3 + TypeScript + Vite
- [x] Configurar Vuetify, Tailwind CSS 4, Vue Router, Vitest, ESLint, Prettier
- [x] Definir arquitetura e estrutura de diretórios
- [x] Criar Design System (tokens, tema, componentes base)
- [x] Criar documentação inicial

## Sprint 0.5 — Consolidação (atual)

- [x] Reorganizar estilos em tokens/, theme/, globals/
- [x] Adicionar suporte a Dark Theme
- [x] Criar composable useTheme() com Light/Dark/System
- [x] Revisar componentes para usar tokens
- [x] Criar AppShell (AppHeader + RouterView)
- [x] Definir princípios de UX
- [x] Criar documento philosophy.md

## Sprint 1 — Domínio

- [x] Implementar domínio das perguntas e respostas
- [x] Implementar sistema de pontuação
- [x] 49 testes de domínio
- [x] Documentar domínio em docs/domain.md

## Sprint 1.1 — Correção do Domínio (concluído)

- [x] Corrigir mapeamento de alternativas conforme gabarito oficial
- [x] Adicionar validação completa do gabarito nos testes
- [x] Documentar gabarito oficial em docs/domain.md

## Sprint 1.2 — Refinamento do Domínio (concluído)

- [x] Remover campo redundante `slug` do domínio
- [x] Criar testes para `getMinistry`

## Sprint 2 — Application Layer (concluído)

- [x] Criar `TestSession` com criação, validação e conclusão
- [x] Criar `calculateResult` como caso de uso
- [x] 20 testes de aplicação
- [x] Documentar `docs/application.md`

## Sprint 3 — Infraestrutura (concluído)

- [x] Criar adapter localStorage para sessão e resultado
- [x] 13 testes de persistência
- [x] Documentar `docs/infrastructure.md`

## Sprint 4 — Questionário

- [ ] Criar tela do questionário
- [ ] Implementar navegação entre perguntas
- [ ] Persistência local das respostas

## Sprint 3 — Resultados

- [ ] Implementar cálculo dos resultados
- [ ] Criar tela de resultados
- [ ] Criar tela de perfil individual por ministério

## Sprint 4 — Refinamento

- [ ] Responsividade
- [ ] Acessibilidade
- [ ] Deploy na Vercel
