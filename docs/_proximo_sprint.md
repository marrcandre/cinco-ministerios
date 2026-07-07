Estamos fazendo ajustes finais do Sprint 6.3 antes da release v1.0.0.

Objetivo:
Refinar a apresentação institucional sem alterar arquitetura ou regras de negócio.

IMPORTANTE:
- Não criar novas funcionalidades.
- Não alterar fluxo do teste.
- Manter Design System existente.

## 1. Remover logo da Home

Atualizar:

src/views/HomeView.vue

Remover o AppLogo adicionado no hero.

Motivo:
A Home deve priorizar:
- apresentação do teste;
- chamada principal;
- início da experiência.

Manter o logo:
- Header;
- Página Sobre.

---

## 2. Completar projetos relacionados

Atualizar:

src/views/AboutView.vue

Na seção de projetos adicionar:

### Cinco Ministérios

Descrição:
Ferramenta de reflexão baseada em Efésios 4:11 para descoberta de perfil ministerial.

Links:
- Aplicação:
https://cinco-ministerios.vercel.app/
- Código fonte:
https://github.com/marrcandre/cinco-ministerios

### Dons Espirituais

Descrição:
Ferramenta de reflexão sobre dons espirituais.

Links:
- Aplicação:
https://dons-espirituais.vercel.app
- Código fonte:
https://github.com/marrcandre/dons-espirituais

Utilizar componentes de link existentes ou padrão visual da aplicação.

---

## 3. Tornar contatos clicáveis

Na seção Autor:

Transformar em links:

GitHub:
https://github.com/marrcandre

LinkedIn:
https://www.linkedin.com/in/marrcandre/

Email:
mailto:marcoandre@gmail.com

Para links externos:
- target="_blank"
- rel="noopener noreferrer"

---

## 4. Revisar visual

Verificar:

- Sobre;
- Footer;
- Header;
- Home.

Garantir:
- sem elementos sobrando;
- espaçamento consistente;
- links com aparência adequada.

---

## 5. Documentação

Atualizar:

docs/sprint-6-publicacao.md

Registrar esses ajustes finais do Sprint 6.3.

---

## 6. Validação

Executar:

npm run lint
npm run typecheck
npm run test
npm run build

Apresentar:
- resumo;
- arquivos alterados;
- testes;
- commit sugerido.