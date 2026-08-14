# Exercício 2 — Componente

## Enunciado

> Crie um projeto com um componente denominado `DadosUsuario.jsx` que mostre: Nome, Sobrenome, e-mail, Sexo e Idade.

## Passo a passo

### 1. Criação do projeto
```bash
npm create vite@latest componentes -- --template react
cd componentes
npm install
```

### 2. Criação do componente `DadosUsuario.jsx`
Foi criado o arquivo `src/DadosUsuario.jsx`, separado do `App.jsx`, seguindo o princípio de componentização do React (cada parte da interface em seu próprio arquivo).

### 3. Definição das props com valores padrão
O componente recebe os dados do usuário via **props**, com valores padrão definidos por destructuring, para que funcione mesmo sem receber nada de fora:

```jsx
const DadosUsuario = ({
  nome = "Maily",
  sobreNome = "Ramos",
  email = "maily.ramos@aluno.senia.br",
  sexo = "Feminino",
  idade = 17
}) => {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Sobrenome: {sobreNome}</p>
      <p>E-mail: {email}</p>
      <p>Sexo: {sexo}</p>
      <p>Idade: {idade}</p>
    </div>
  )
}

export default DadosUsuario
```

### 4. Importação do componente em `App.jsx`
No arquivo `src/App.jsx`, o componente é importado e renderizado dentro da aplicação:

```jsx
import './App.css'
import DadosUsuario from './DadosUsuario'

function App() {
  return (
    <div className='App'>
      <h3>Dados de Usuário</h3>
      <DadosUsuario/>
    </div>
  )
}

export default App
```

### 5. Renderização na tela
O `main.jsx` renderiza `App`, que por sua vez renderiza `DadosUsuario`, exibindo os dados do usuário na página.

### 6. Execução
```bash
npm run dev
```
Acesse `http://localhost:5173` para ver os dados do usuário.

## Conceitos praticados
- Criação de um componente em arquivo separado (`DadosUsuario.jsx`).
- Composição de componentes (`App` renderiza `DadosUsuario`).
- Props com valores padrão via destructuring.