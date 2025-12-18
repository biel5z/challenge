function maiorDeIdade(idade){
    if(idade >= 18){
        return true;
    }else {
        return false;
    }
}
let idade = 0;
let verificacao = maiorDeIdade(idade);

console.log(verificacao ? "É maior de idade" : "Não é maior de idade");
// ou
let mensagem = verificacao ? "Sim, é maior" : "Não, é maior";
console.log(mensagem);