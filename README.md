# Cinco Ministérios

Aplicação web para identificação de afinidades com os Cinco Ministérios descritos em Efésios 4:11.

O teste possui seis perguntas e apresenta um ranking dos cinco ministérios, destacando aqueles com maior pontuação. O resultado serve como uma ferramenta de reflexão e autoconhecimento, não substituindo o discipulado, a caminhada cristã ou a orientação da liderança da igreja local.

---

## Tecnologias

- Vue 3
- TypeScript
- Vite
- Vuetify
- Tailwind CSS 4
- Vue Router
- Vitest

---

## Executando o projeto

```bash
npm install
npm run dev
```

Aplicação disponível em:

```
http://localhost:5173
```

---

## Scripts

```bash
npm run dev        # Desenvolvimento
npm run build      # Build de produção
npm run preview    # Preview do build
npm run lint       # ESLint
npm run format     # Prettier
npm run test       # Executar testes
```

---

## Arquitetura

O projeto segue uma arquitetura em camadas para manter a regra de negócio independente do framework.

```
src/
├── app/               # Bootstrap da aplicação
├── application/       # Casos de uso
├── components/        # Componentes Vue
├── composables/       # Estado da interface
├── domain/            # Regras de negócio
├── infrastructure/    # Persistência (localStorage)
├── styles/            # Design System
├── tests/             # Testes automatizados
└── views/             # Páginas
```

### Camadas

- **Domain**: perguntas, ministérios, pontuação e regras do teste.
- **Application**: fluxo do teste e cálculo do resultado.
- **Infrastructure**: persistência utilizando LocalStorage.
- **Presentation**: componentes Vue, páginas e composables.

---

## Testes

O projeto possui testes automatizados para:

- domínio;
- aplicação;
- infraestrutura;
- componentes.

Execute:

```bash
npm run test
```

---

## Licença

Projeto desenvolvido para fins educacionais e ministeriais.