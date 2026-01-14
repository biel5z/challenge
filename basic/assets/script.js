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
personagem.nome = "Superman";
personagem.habilidades.forca += 5;
personagem.espadas.push('Brasileira');
console.log(personagem.espadas);