# Exercício 3 — Props

## Enunciado

> Crie um projeto com o componente denominado `Pessoa.jsx` que mostre nome, idade, cidade e endereço.

## Passo a passo

### 1. Criação do projeto
```bash
npm create vite@latest props -- --template react
cd props
npm install
```

### 2. Criação do componente `Pessoa.jsx`
Foi criado o arquivo `src/Pessoa.jsx` para concentrar a lógica de exibição dos dados da pessoa.

### 3. Definição das props com valores padrão
O componente recebe `nome`, `idade`, `cidade` e `endereco` via **props**, com valores padrão definidos diretamente no destructuring dos parâmetros:

```jsx
const Pessoa = ({
  nome = "Alana",
  idade = 17,
  cidade = "Santo André - SP",
  endereco = "Rua Alexandria"
}) => {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Cidade: {cidade}</p>
      <p>Endereço: {endereco}</p>
    </div>
  )
}

export default Pessoa
```

### 4. Importação do componente em `App.jsx`
No `src/App.jsx`, o componente `Pessoa` é importado e renderizado como filho do componente principal:

```jsx
import './App.css'
import Pessoa from './Pessoa'

function App() {
  return (
    <div className='App'>
      <h3>Pessoa</h3>
      <Pessoa/>
    </div>
  )
}

export default App
```

Como nenhuma prop é passada explicitamente na tag `<Pessoa/>`, o componente usa os valores padrão definidos no passo anterior. (Para testar com outros dados, bastaria escrever, por exemplo, `<Pessoa nome="João" idade={25} cidade="São Paulo" endereco="Av. Paulista" />`.)

### 5. Renderização na tela
O `main.jsx` renderiza `App`, que renderiza `Pessoa`, exibindo os dados da pessoa na página.

### 6. Execução
```bash
npm run dev
```
Acesse `http://localhost:5173` para ver os dados da pessoa.

## Conceitos praticados
- Passagem de dados entre componentes via **props**.
- Destructuring de props com valores padrão.
- Relação componente-pai (`App`) e componente-filho (`Pessoa`).