let personagem = {
    nome: 'JT',
    idade: 22,
    carros: [
        {modelo: 'Fiat', color: "Azul"},
        {modelo: 'BMW', color: "Preta"}
    ]
}

console.log(`O carro de ${personagem.nome} é o ${personagem.carros[0].modelo} com a cor ${personagem.carros[0].color}`);