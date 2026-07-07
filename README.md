# Cinco Ministérios

Aplicação web para reflexão e identificação de afinidades com os **Cinco Ministérios descritos em Efésios 4:11**.

O teste apresenta um conjunto de perguntas e gera um ranking dos cinco ministérios com maior afinidade, ajudando o usuário a refletir sobre possíveis áreas de atuação e serviço.

> Este teste é uma ferramenta de reflexão e autoconhecimento. Ele não substitui discipulado, acompanhamento espiritual ou orientação da liderança da igreja local.

---

## 🌐 Aplicação

Acesse:

https://cinco-ministerios.vercel.app/

---

## ✨ Sobre o projeto

O projeto Cinco Ministérios foi desenvolvido como uma ferramenta simples, acessível e gratuita para auxiliar pessoas interessadas em refletir sobre seus possíveis perfis ministeriais.

Características:

* não exige cadastro ou login;
* não coleta dados pessoais;
* as respostas permanecem no dispositivo do usuário;
* o resultado pode ser compartilhado voluntariamente.

---

## 📖 Base bíblica

O conceito dos Cinco Ministérios é baseado em:

> "E ele mesmo concedeu uns para apóstolos, outros para profetas, outros para evangelistas, e outros para pastores e mestres."

Efésios 4:11

---

## 🛠 Tecnologias

* Vue 3
* TypeScript
* Vite
* Vuetify 3
* Tailwind CSS 4
* Vue Router
* Vitest

---

## 🏗 Arquitetura

O projeto utiliza uma arquitetura em camadas, mantendo as regras de negócio independentes da interface.

```
src/
├── app/               # Inicialização e configuração
├── application/       # Casos de uso
├── components/        # Componentes Vue
├── composables/       # Lógica reutilizável da interface
├── domain/            # Regras de negócio
├── infrastructure/    # Persistência local
├── styles/            # Design System
├── tests/             # Testes automatizados
└── views/             # Páginas da aplicação
```

### Camadas principais

* **Domain**

  * perguntas;
  * ministérios;
  * pontuação;
  * regras do teste.

* **Application**

  * fluxo do questionário;
  * cálculo dos resultados.

* **Infrastructure**

  * armazenamento local utilizando LocalStorage.

* **Presentation**

  * páginas;
  * componentes;
  * navegação;
  * tema visual.

---

## 🚀 Executando localmente

Clone o projeto:

```bash
git clone https://github.com/marrcandre/cinco-ministerios.git
```

Instale as dependências:

```bash
npm install
```

Execute em desenvolvimento:

```bash
npm run dev
```

Aplicação disponível em:

```
http://localhost:5173
```

---

## 📋 Scripts disponíveis

```bash
npm run dev        # Desenvolvimento
npm run build      # Build de produção
npm run preview    # Preview do build
npm run lint       # ESLint
npm run format     # Prettier
npm run test       # Testes automatizados
```

---

## 🧪 Testes

O projeto possui testes automatizados cobrindo:

* regras de domínio;
* casos de uso;
* infraestrutura;
* componentes.

Execute:

```bash
npm run test
```

---

## 🔗 Projetos relacionados

### Dons Espirituais

Aplicação complementar para reflexão sobre dons espirituais.

https://dons-espirituais.vercel.app/

---

## 👤 Autor

**Marco André Mendes**

* GitHub: https://github.com/marrcandre
* LinkedIn: https://www.linkedin.com/in/marrcandre/
* Email: [marcoandre@gmail.com](mailto:marcoandre@gmail.com)

---

## 💚 Apoie o projeto

Se esta ferramenta foi útil para você e deseja apoiar sua continuidade:

PIX:

```
marcoandre@gmail.com
```

---

## 📄 Licença

Projeto desenvolvido para fins educacionais e ministeriais.
