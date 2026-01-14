let personagem = {
    nome: 'Batman',
    idade: 36,
    cidade:'Gothan',
    espadas: ["Chinesa", 'Americana'],
    habilidades: {
        forca: 99,
        velocida: 78,
        luta: 98
    }

}
// isso se chama "Cascata" ficar entrando de um em um
console.log(`${personagem.nome} tem ${personagem.idade} anos.`);
console.log(personagem.habilidades.forca);
console.log(personagem.espadas[1]);