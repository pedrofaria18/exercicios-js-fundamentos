/* Crie uma função que receba dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. 
Faça com que a função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. */

let vetorInicial = [1, 2, 3, 3.3, 4.7, 8, 4]
let numeroInteiro = 8

function multiplicacaoDeVetor (vetorInicial, numeroInteiro) {
    let novoVetor = []

    for(let i = 0 ; i < vetorInicial.length ; i++) {
        novoVetor.push(vetorInicial[i] * numeroInteiro)
    }
    
    console.log(`O vetor com a multiplicação ficou: ${novoVetor}`)
}

multiplicacaoDeVetor (vetorInicial, numeroInteiro)