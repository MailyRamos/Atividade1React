const Pessoa = ({nome = "Alana", idade = 17, cidade = "Santo André - SP", endereco = "Rua Alexandria"}) => {

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