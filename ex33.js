/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. 
Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. 
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. 
Todos os elementos do vetor resultado deverão aparecer no console */

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['a', 'b', 'c', 'd']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

/* Se o último argumento nomeado de uma função tiver prefixo com  ..., ele irá se tornar um array em que os elemento de 0 (inclusive) até theArgs.length (exclusivo) são disponibilizados pelos argumentos atuais passados à função. */
function concatenar (...vetores) {
    let resultado = []
    
    for(let i = 0 ; i < vetores.length ; i++){
        resultado = resultado.concat(vetores[i])
    }

    return resultado;
}

console.log(concatenar(vetorInteiro, vetorString))
console.log(concatenar(vetorInteiro, vetorDouble))