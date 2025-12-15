
let idade = 59;

if(idade < 18){
    console.log("Você é uma criança.");
}else if(idade >= 18 && idade < 60){
    console.log("Você é um adulto")
}else if(idade >= 60){
    console.log("Você é um idoso")
}




/* 
Multi-condicionais (&& e ||)

// let temHabilitacao = true;

// if (idade >= 18 && temHabilitacao) {
//     console.log("Pode dirigir legalmente."); // Este código é executado
// }else {
//     console.log("Não pode dirigir.")
// }
// if(idade >= 18 && idade <= 60){
//     console.log("Você é um adulto")
// }else {
//     console.log("Voce é menor")
// }

let idade = 26;

if (idade >= 18) {
    if (idade < 60) {
        console.log("voce é um adulto")
    }
}

if(idade >= 18 && idade <= 60){
    console.log("Você é um adulto")
}


// Exemplo 1: Pelo menos uma verdadeira
let dia_util = true;
let feriado = false;

if (dia_util || feriado) {
  console.log("A loja está aberta."); // Este código é executado (dia útil é verdadeiro)
} else {
  console.log("A loja está fechada.");
}

// Exemplo 2: Ambas falsas
let temperatura = 10;
let chovendo = false;

if (temperatura > 30 || chovendo) {
    console.log("Ótimo dia para piscina.");
} else {
    console.log("Dia normal."); // Este código é executado
}


AND &&: E
OR ||: OU
*/ 


/*
Condicional If / else:

let idade = 19;

if (idade >= 18){
    console.log("VOce é maior de idade")
} else{
    console.log("voce é menor de idade")
}

let idade = "20";
 
if (idade === 20){
   console.log('Você tem 20 anos')
}

< : Menor
> : Maior
== : igual
>= : maior ou igual
<= : menor ou igual
!= : diferente
=== : mais restrito
*/