# Sprint 6 — Publicação (v1.0.0)

## Objetivo

Preparar a aplicação **Cinco Ministérios** para publicação definitiva, transformando o MVP funcional em uma aplicação pública com identidade própria, apresentação profissional e recursos básicos de presença web.

Este sprint **não altera regras de negócio, fluxo do teste ou arquitetura da aplicação**. O foco é exclusivamente em publicação, identidade, experiência do usuário e preparação para divulgação.

---

# Escopo previsto


## 1. Identidade visual

### Favicon e ícones

* Criar favicon próprio:

  * `favicon.ico`
  * `favicon.svg`
* Criar logo oficial do projeto.
* Criar ícone para dispositivos móveis:

  * `apple-touch-icon`.

Objetivo:

* melhorar reconhecimento da aplicação;
* substituir elementos genéricos;
* preparar a identidade visual para compartilhamentos e instalação.

---

## 2. Metadados da aplicação

Configurar informações oficiais da aplicação:

* Título da página (`title`).
* Meta description.
* `theme-color`.
* Open Graph:

  * título;
  * descrição;
  * imagem de compartilhamento;
  * URL.
* Twitter Card.

Objetivo:

* melhorar aparência quando o link for compartilhado;
* preparar para mecanismos de busca;
* garantir uma apresentação consistente.

---

## 3. PWA básico

Adicionar suporte inicial para Progressive Web App:

* Criar `site.webmanifest`.
* Configurar:

  * nome da aplicação;
  * nome curto;
  * descrição;
  * ícones;
  * cores;
  * comportamento de abertura.

Objetivo:

* melhorar experiência em dispositivos móveis;
* permitir futura evolução para instalação como aplicativo.

---

## 4. SEO básico

Criar arquivos e configurações necessárias para indexação:

* `robots.txt`.
* `sitemap.xml`.

Revisar:

* títulos;
* descrições;
* estrutura das páginas públicas.

Objetivo:

* facilitar descoberta da aplicação;
* preparar presença em mecanismos de busca.

---

## 5. Experiência de navegação

Melhorias de acabamento:

* Criar página 404 personalizada.
* Revisar textos da interface.
* Revisar chamadas principais:

  * "Faça o teste";
  * "Veja seu resultado";
  * "Compartilhe seu resultado".
* Conferir responsividade em dispositivos móveis.

Objetivo:

* garantir uma experiência consistente antes da divulgação.

---

## 6. Rodapé institucional

Criar rodapé com informações permanentes do projeto:

* Sobre o projeto.
* Objetivo do teste dos Cinco Ministérios.
* Explicação resumida da metodologia utilizada.
* Informação sobre privacidade:

  * não exige login;
  * não coleta respostas pessoais;
  * o usuário pode compartilhar seu resultado voluntariamente.
* Autor:

  * Marco André Mendes.
* Contato.
* Lista de outros projetos.
* Área "Apoie este projeto":

  * chave PIX.

Objetivo:

* dar transparência;
* fortalecer confiança;
* criar uma identidade institucional.

---

## 7. Revisão final para publicação

Checklist antes da versão pública:

* Conferir favicon em navegadores.
* Testar compartilhamento em redes sociais.
* Validar Open Graph.
* Conferir indexação.
* Revisar aparência geral.
* Testar navegação completa:

  * início;
  * teste;
  * resultado;
  * páginas institucionais.
* Revisar funcionamento em desktop e mobile.

---

# Encerramento do Sprint

Ao finalizar este sprint:

* Criar tag Git:

```
v1.0.0
```

* Criar release correspondente no GitHub.

Esta marca representa oficialmente a primeira versão estável pública do projeto **Cinco Ministérios**.

---

# Fora do escopo deste sprint

Para preservar o foco da publicação, não serão implementados:

* autenticação de usuários;
* histórico de resultados;
* banco de dados de participantes;
* integração com o projeto de Dons Espirituais;
* transformação em plataforma de múltiplos testes;
* alterações na lógica ou metodologia do teste.


## Ordem de execução

1. Identidade visual e metadata
2. PWA e SEO
3. Footer institucional
4. Página 404
5. Revisão final
6. Release v1.0.0

---

## Sprint 6.1 — Identidade Visual e Metadados (concluído)

### Status: ✅ Concluído (com alteração de identidade visual)

### Arquivos alterados

| Arquivo | Ação | Descrição |
|---|---|---|
| `public/favicon.svg` | Substituído | Novo design: cruz central + 5 pontos (pentágono) em verde escuro (#1a4d2e) e dourado (#d4a843) |
| `public/favicon.ico` | Regenerado | 32×32 a partir do novo favicon.svg |
| `public/apple-touch-icon.png` | Regenerado | 180×180 a partir do novo favicon.svg |
| `public/og-image.png` | Substituído | 1200×630 com gradiente verde escuro + símbolo dourado |
| `index.html` | Alterado | theme-color atualizado para #1a4d2e |
| `src/styles/tokens/colors.css` | Alterado | Paleta padronizada: primary → #1a4d2e, secondary → #d4a843 |
| `src/styles/theme/vuetify.ts` | Alterado | Tema light alinhado: primary → #1A4D2E, secondary → #D4A843 |
| `src/components/ui/AppHeader.vue` | Alterado | Texto "Os Cinco Ministérios" → "Cinco Ministérios" |
| `docs/sprint-6-publicacao.md` | Alterado | Registro atualizado |

### Decisões tomadas

**Identidade visual**
- **Símbolo**: cruz central representando Cristo + 5 pontos dourados em formação de pentágono, simbolizando os 5 ministérios (Efésios 4:11) ao redor da cruz. O design também evoca os 5 estigmas de Cristo, adicionando profundidade teológica.
- **Paleta**: verde escuro (#1a4d2e) como cor principal + dourado (#d4a843) como cor de destaque. Verde remete a crescimento, vida, esperança; dourado remete a realeza, valor, divindade.
- **Estilo**: minimalista, geométrico, circular (badge), legível em qualquer tamanho.
- **Tamanho do SVG**: 477 bytes (drasticamente menor que o anterior de 9.3 KB).

**Metadados**
- **Título**: "Cinco Ministérios — Descubra seu perfil ministerial".
- **Meta description**: ~155 caracteres, menciona Efésios 4:11 e os 5 ministérios.
- **Theme-color**: `#1a4d2e` (verde escuro), alinhado com a nova paleta.
- **OG/Twitter URL**: `https://cinco-ministerios.vercel.app` (placeholder — atualizar após deploy).
- **Fonte da OG image**: Liberation Sans (Bold para título, Regular para subtítulo).

### Validações

| Comando | Resultado |
|---|---|
| `npm run lint` | ✅ Sem erros |
| `npm run typecheck` | ✅ Sem erros |
| `npm run test` | ✅ 134 testes, 12 arquivos, todos verdes |
| `npm run build` | ✅ Build bem-sucedido |

### Observações

- Nenhuma regra de negócio foi alterada.
- A URL de produção (`og:url`, `twitter:image`) está como placeholder e deve ser atualizada no deploy real.
- A imagem OG foi reduzida de 228 KB para 168 KB com o novo design.

### Padronização concluída

A identidade visual foi unificada com a paleta oficial:

| Elemento | Cor | Código |
|---|---|---|
| `favicon.svg` | Verde escuro + Dourado | #1a4d2e / #d4a843 |
| `og-image.png` | Verde escuro + Dourado | #1a4d2e / #d4a843 |
| `index.html` (theme-color) | Verde escuro | #1a4d2e |
| Tokens CSS (light) | Verde escuro + Dourado + hovers | #1a4d2e / #143d24 / #d4a843 / #c49436 |
| Tokens CSS (dark) | Verde claro + Dourado (visibilidade em fundo escuro) | #2d8a5a / #36a36c / #d4a843 / #e0b83a |
| Tema Vuetify (light) | Verde escuro + Dourado | #1A4D2E / #D4A843 |
| Tema Vuetify (dark) | Verde claro + Dourado (visibilidade em fundo escuro) | #2D8A5A / #D4A82E |
| AppHeader | Texto "Cinco Ministérios" + cor primary | `var(--color-primary)` |

**Decisão do modo escuro**: No dark mode, o verde primário foi mantido como `#2D8A5A` (mais claro que o `#1a4d2e` do light mode) por questões de contraste e legibilidade sobre fundo `#121212`. O dourado secundário foi mantido como `#d4a843` / `#d4a82e`, que possuem boa visibilidade tanto em light quanto em dark.

---

## Sprint 6.2 — PWA e SEO (concluído)

### Status: ✅ Concluído

### Arquivos criados

| Arquivo | Descrição |
|---|---|
| `public/site.webmanifest` | Manifest PWA com nome, ícones 192×192 e 512×512, cores e display standalone |
| `public/icon-192.png` | Ícone PWA 192×192 a partir do favicon.svg |
| `public/icon-512.png` | Ícone PWA 512×512 a partir do favicon.svg |
| `public/robots.txt` | Permite indexação total, aponta sitemap |
| `public/sitemap.xml` | Lista as 3 páginas públicas: `/`, `/test`, `/result` |

### Arquivos alterados

| Arquivo | Ação |
|---|---|
| `index.html` | Adicionado `<link rel="manifest" href="/site.webmanifest">` |

### Decisões tomadas

**PWA**
- **Display**: `standalone` — oferece experiência imersiva sem barra de navegador.
- **Background/theme color**: `#1a4d2e` (verde escuro oficial) — consistente com a identidade visual.
- **Icons**: gerados do favicon.svg oficial (cruz + 5 pontos, verde escuro + dourado).
- **Purpose**: `any maskable` — permite que o navegador recorte o ícone para adaptá-lo a diferentes formatos de dispositivo.

**SEO**
- **robots.txt**: permite todas as rotas públicas. Sitemap aponta para `https://cinco-ministerios.vercel.app/sitemap.xml`.
- **sitemap.xml**: inclui apenas `/`, `/test`, `/result`. A página 404 (quando criada) não deve ser incluída.
- **URL**: mantido `https://cinco-ministerios.vercel.app` como placeholder. Deve ser atualizado quando o domínio definitivo for definido.

### Validações

| Comando | Resultado |
|---|---|
| `npm run lint` | ✅ Sem erros |
| `npm run typecheck` | ✅ Sem erros |
| `npm run test` | ✅ 134 testes, 12 arquivos, todos verdes |
| `npm run build` | ✅ Build bem-sucedido |

### Observações

- Nenhuma regra de negócio alterada.
- Nenhum componente Vue foi modificado.
- O sitemap e robots.txt usam URL provisória (`vercel.app`) — atualizar no deploy.

### Pendências futuras

- [ ] Validar compartilhamento real em redes sociais após publicação.

- [] Quando houver domínio definitivo:
  - atualizar sitemap.xml;
  - atualizar robots.txt se necessário;
  - atualizar og:url;
  - revisar URLs do manifest.
