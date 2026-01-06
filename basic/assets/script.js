function validar(usuario, senha){
    if(usuario === "Pedro" && senha === '123'){
        return true;
    }else {
        return false;
    }
}

let usuario = 'Pedr';
let senha = '123'
let validacao = validar(usuario, senha);
if (validacao){
    console.log("Acesso concedido.");
}else{
    console.log("Acesso NEGADO!")
}



// function calcularImovel(metragem, quartos){
//     let m2 = 3000;
//     let preco = 0;

//     switch(quartos){
//         case 1:
//         default:
//             preco = metragem * m2;
//             break;
            
//         case 2:
//             preco = metragem * (m2 * 1.2);
//             break;

//         case 3:
//             preco = metragem * (m2 * 1.5);
//             break
//     }
//     return preco;
// }

// let mensagem = 123;
// let quartos = 3;
// let preco = calcularImovel(metragem, quartos);
// console.log(`A casa custa R$ ${preco}`)