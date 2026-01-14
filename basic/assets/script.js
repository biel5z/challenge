let pessoa = {
    nome: 'Palmeira',
    sobrenome: "Barra funda",
    idade: 115,

    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }  
}

console.log(pessoa.nomeCompleto())
