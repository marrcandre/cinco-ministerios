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

### Status: ✅ Concluído

### Arquivos alterados

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | Alterado | Título, meta description, theme-color, OG, Twitter Card, apple-touch-icon, favicon.ico |
| `public/favicon.ico` | Criado | Ícone 32×32 gerado a partir do favicon.svg |
| `public/apple-touch-icon.png` | Criado | Ícone 180×180 gerado a partir do favicon.svg |
| `public/og-image.png` | Criado | Imagem Open Graph 1200×630 com fundo gradiente roxo + símbolo + texto |
| `docs/sprint-6-publicacao.md` | Alterado | Adicionado registro do Sprint 6.1 |

### Decisões tomadas

- **Título**: "Cinco Ministérios — Descubra seu perfil ministerial" (removido artigo "Os" para versão mais direta e SEO-friendly).
- **Meta description**: texto descritivo de ~155 caracteres mencionando Efésios 4:11 e os 5 ministérios.
- **Theme-color**: `#7c3aed` (roxo), mesma família do favicon.
- **OG image**: gerada com gradiente roxo (mesma paleta do favicon), símbolo centralizado e texto "Cinco Ministérios" + subtítulo "Descubra seu perfil ministerial".
- **OG/Twitter URL**: `https://cinco-ministerios.vercel.app` (placeholder — atualizar após deploy).
- **Favicon**: mantido o SVG original como primário; adicionado `.ico` como fallback para browsers legacy.
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
- Nenhum componente Vue foi modificado.
- A URL de produção (`og:url`, `twitter:image`) está como placeholder e deve ser atualizada no deploy real.
- O tamanho do favicon.ico (4.2 KB) e apple-touch-icon (20 KB) estão adequados.
- A imagem OG tem 228 KB — idealmente poderia ser otimizada, mas está dentro do aceitável para redes sociais.

### Pendências futuras

- [ ] Atualizar og:url após definição do domínio definitivo.
- [ ] Validar compartilhamento real em redes sociais após publicação.