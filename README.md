# Atividade 1 – React JS

Este repositório contém a resolução dos 4 exercícios propostos na atividade de **Frontend – React JS**. Cada exercício foi implementado como um projeto React (Vite) independente, em sua própria pasta.

| Pasta | Exercício | Componente principal |
|---|---|---|
| `variaveis/` | 1. Trabalhando com variáveis | `App.jsx` |
| `componentes/` | 2. Componente | `DadosUsuario.jsx` |
| `props/` | 3. Props | `Pessoa.jsx` |
| `jsx_componente/` | 4. JSX e Componente | `Carro.jsx` |

Todas as pastas seguem a mesma estrutura padrão gerada pelo Vite (`index.html`, `vite.config.js`, `eslint.config.js`, `package.json`, `public/`, `src/`), então abaixo o foco é nos arquivos que efetivamente resolvem cada exercício.

---

## 1. `variaveis/` — Trabalhando com variáveis

**Pede no enunciado:** criar um projeto React que mostre os dados de um produto: Nome, Descrição, Marca e Preço.

**Arquivo principal:** `variaveis/src/App.jsx`

- Declara variáveis constantes (`nome`, `marca`, `preco`) diretamente no componente `App`.
- Usa interpolação JSX (`{variavel}`) para exibir os valores dentro de tags HTML (`<h1>`, `<h3>`, `<p>`).
- A descrição do produto é escrita como texto fixo dentro de um `<p>`.
- Exemplo de dados usados: produto "Nintendo Switch", marca "Nintendo", preço "R$2.100".

Demais arquivos (`App.css`, `main.jsx`, `index.css`, `public/`) são apenas o boilerplate padrão do Vite/React (estilos, ponto de entrada da aplicação e ícones), sem lógica adicional.

---

## 2. `componentes/` — Componente

**Pede no enunciado:** criar um projeto com um componente `DadosUsuario.jsx` que mostre: Nome, Sobrenome, e-mail, Sexo e Idade.

**Arquivos principais:**

- `componentes/src/DadosUsuario.jsx`
  - Componente funcional que recebe `nome`, `sobreNome`, `email`, `sexo` e `idade` via **props**, com valores padrão (default props) caso nada seja passado.
  - Renderiza cada informação em um `<p>` dentro de uma `<div>`.
- `componentes/src/App.jsx`
  - Importa e renderiza o componente `<DadosUsuario />`, demonstrando a composição de componentes em React.

Demais arquivos seguem o padrão Vite (estilos e configuração), sem alterações relevantes ao exercício.

---

## 3. `props/` — Props

**Pede no enunciado:** criar um projeto com o componente `Pessoa.jsx` que mostre nome, idade, cidade e endereço.

**Arquivos principais:**

- `props/src/Pessoa.jsx`
  - Componente funcional que recebe `nome`, `idade`, `cidade` e `endereco` como **props**, também com valores padrão.
  - Exibe os dados em parágrafos (`<p>`).
- `props/src/App.jsx`
  - Importa e renderiza `<Pessoa />`, mostrando como um componente-pai passa (ou, neste caso, deixa nos valores padrão) as props para o componente-filho.

Demais arquivos seguem o padrão Vite (estilos e configuração).

---

## 4. `jsx_componente/` — JSX e Componente

**Pede no enunciado:** criar um projeto com o componente `Carro.jsx` que retorne uma lista de 5 carros mostrando nome, modelo, marca e preço.

**Arquivos principais:**

- `jsx_componente/src/Carro.jsx`
  - Declara um array (`users`) com 5 objetos, cada um representando um carro (`id`, `nome`, `modelo`, `marca`, `preco`).
  - Usa o método `.map()` para percorrer o array e renderizar dinamicamente um item `<li>` para cada carro, exibindo nome, modelo, marca e preço.
  - Usa a prop especial `key` (obrigatória em listas no React) para identificar cada item.
- `jsx_componente/src/App.jsx`
  - Importa e renderiza o componente `<Carro />` dentro de um título "Carro".

Demais arquivos seguem o padrão Vite (estilos e configuração).

---

## Como executar qualquer um dos projetos

Cada pasta é um projeto Vite independente. Para rodar, entre na pasta desejada e execute:

```bash
cd <nome-da-pasta>   # ex: variaveis, componentes, props ou jsx_componente
npm install
npm run dev
```

Depois é só abrir o endereço local exibido no terminal (geralmente `http://localhost:5173`).
