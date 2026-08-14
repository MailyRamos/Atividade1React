# Exercício 4 — JSX e Componente

## Enunciado

> Crie um projeto com o componente denominado `Carro.jsx`. Este componente deve retornar uma lista de 5 carros que mostre nome, modelo, marca e preço.

## Passo a passo

### 1. Criação do projeto
```bash
npm create vite@latest jsx_componente -- --template react
cd jsx_componente
npm install
```

### 2. Criação do componente `Carro.jsx`
Foi criado o arquivo `src/Carro.jsx` para conter a lista de carros e a lógica de renderização.

### 3. Declaração do array de carros
Dentro do componente, foi criado um array `users` com 5 objetos, cada um representando um carro:

```jsx
const users = [
  { id: 1, nome: 'Civic', modelo: '2025', marca: 'Honda', preco: 'R$145000' },
  { id: 2, nome: 'Corolla', modelo: '2025', marca: 'Toyota', preco: 'R$158000' },
  { id: 3, nome: 'Onix', modelo: '2025', marca: 'Chevrolet', preco: 'R$95000' },
  { id: 4, nome: 'Polo', modelo: '2025', marca: 'Volkswagen', preco: 'R$105000' },
  { id: 5, nome: 'Mobi', modelo: '2025', marca: 'Fiat', preco: 'R$75000' },
]
```

### 4. Renderização da lista com `.map()`
O array é percorrido com `.map()` para gerar um `<li>` para cada carro. Cada item recebe uma `key` única (`user.id`), exigida pelo React para otimizar a renderização de listas:

```jsx
const Carro = () => {
  const users = [ /* ...array acima... */ ]

  return (
    <div>
      <div>
        {users.map((user) => (
          <li key={user.id}>
            {user.nome} {user.modelo} {user.marca} {user.preco}
          </li>
        ))}
      </div>
    </div>
  )
}

export default Carro
```

### 5. Importação do componente em `App.jsx`
No `src/App.jsx`, o componente `Carro` é importado e renderizado dentro de um título:

```jsx
import './App.css'
import Carro from './Carro'

function App() {
  return (
    <div className='App'>
      <h1>Carros</h1>
      <Carro />
    </div>
  )
}

export default App
```

### 6. Renderização na tela
O `main.jsx` renderiza `App`, que renderiza `Carro`, exibindo a lista dos 5 carros na página.

### 7. Execução
```bash
npm run dev
```
Acesse `http://localhost:5173` para ver a lista de carros.

## Conceitos praticados
- Trabalho com **arrays de objetos** como fonte de dados.
- Renderização de **listas** em JSX usando `.map()`.
- Uso da prop especial `key` ao renderizar listas.
- Composição de componentes (`App` renderiza `Carro`).