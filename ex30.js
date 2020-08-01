/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

function maiorMenor (vetorNumeros) {
    let maior
    let menor

    for(let i = 0 ; i < vetorNumeros.length ; i++) {
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    
    console.log(`${maior} é o maior número e ${menor} é o menor número`)
}

vetor = [1, 2, 3, 4, 5, 6, 14, 15, 16, 23, 25, 16, 11, 3]
maiorMenor(vetor)