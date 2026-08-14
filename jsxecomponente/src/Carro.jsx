const Carro = () => {
 // Declaração de Lista
    const users = [
        { nome: 'Civic', modelo: '2025', marca: 'Honda', preco: 'R$145.000' },
        { nome: 'Corolla', modelo: '2025', marca: 'Toyota', preco: 'R$158.000' },
        { nome: 'Onix', modelo: '2025', marca: 'Chevrolet', preco: 'R$95.000' },
        { nome: 'Polo', modelo: '2025', marca: 'Volkswagen', preco: 'R$105.000' },
        { nome: 'Mobi', modelo: '2025', marca: 'Fiat', preco: 'R$75.000' }

    ]

    // Renderização de Listas 
    return (
        <div>
            <h2>Listas</h2>
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
