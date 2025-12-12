let nota = 50;
let nome = "Gabriel"
// --- Estrutura Condicional (if-else if-else) ---
if (nota >= 90){
    console.log("Parabéns! Você alcançou a nota máxima (A)!")
}else if (nota >= 70 && nota < 90){
    console.log("Ótimo trabalho! Você tem uma nota (B).")

} else if (nota >= 50 && nota < 70){
    console.log("Você está com uma nota (C). Pode melhorar, " + nome)
} else{
    console.log("Você precisa refazer a prova" )
}