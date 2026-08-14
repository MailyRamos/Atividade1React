const DadosUsuario = ({nome = "Maily", sobreNome = "Ramos", email = "maily.ramos@aluno.senai.br",  
    sexo = "Feminino", idade = 17}) => {

    return (
        <div>
            <p>Nome: {nome}</p>
            <p>Sobrenome: {sobreNome}</p>
            <p>Email: {email}</p>
            <p>Sexo: {sexo}</p>
            <p>Idade: {idade}</p>
        </div>
    )
}

export default DadosUsuario