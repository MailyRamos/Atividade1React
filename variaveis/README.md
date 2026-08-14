# Exercício 1 — Trabalhando com Variáveis

## Enunciado

> Crie um projeto em React que mostre os dados de um produto: Nome, Descrição, Marca e Preço.

## Passo a passo

### 1. Criação do projeto
Projeto criado com Vite usando o template de React:

```bash
npm create vite@latest variaveis -- --template react
cd variaveis
npm install
```

### 2. Estrutura gerada
```
variaveis/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.jsx      # ponto de entrada da aplicação
    ├── App.jsx        # componente principal (onde o exercício foi resolvido)
    ├── App.css
    └── index.css
```

### 3. Declaração das variáveis do produto
Dentro do componente `App`, em `src/App.jsx`, foram declaradas as variáveis com `const`:

```jsx
const nome = "2 Cool 4 Skool"
const marca = "HYBE"
const preco = "R$250,00"
```

A **descrição** foi escrita diretamente como texto no JSX, sem precisar de variável.

### 4. Exibição dos dados no JSX
As variáveis são inseridas no HTML retornado pelo componente usando chaves `{ }`, que permitem escrever expressões JavaScript dentro do JSX:

```jsx
function App() {
  const nome = "Nintendo Switch"
  const marca = "Nintendo"
  const preco = "R$2.100"

  return (
    <>
      <h1>Dados do Produto</h1>
      <h3>Nome: {nome}</h3>
      <p>
        Console de Video Game Híbrido
      </p>
      <h3>Marca: {marca}</h3>
      <h3>Preço: {preco}</h3>
    </>
  )
}

export default App
```

### 5. Renderização na tela
O `main.jsx` renderiza o componente `App` dentro do elemento `#root` do `index.html`, exibindo o resultado no navegador.

### 6. Execução
```bash
npm run dev
```
Acesse `http://localhost:5173` para ver os dados do produto na tela.

## Conceitos praticados
- Declaração de variáveis (`const`) dentro de um componente.
- Interpolação de variáveis no JSX com `{ }`.
- Estrutura básica de um componente funcional React.