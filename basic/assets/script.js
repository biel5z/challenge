let cores = [
    {nome: 'preto', qt: 19},
    {nome: 'azul', qt: 5},
    {nome: 'vermelho', qt: 15 }
];


// for(let n = 0; n < cores.length; n++){
//     console.log(cores[n]);
// }

for(let i in cores){
    console.log(cores[i].nome);
}

// for(let cor of cores){
//     console.log(`Nome: ${cor.nome} - ${cor.qt}`);
// }