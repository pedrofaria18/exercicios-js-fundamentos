/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console */

function negativos (vetorNumeros) {
    let qtdNegativos = 0

    for( let i = 0 ; i < vetorNumeros.length ; i++) {
        if(vetorNumeros[i] < 0 ) {
            qtdNegativos++
        }
    }
    
    console.log(`${qtdNegativos} números são negativos`)
}

vetor = [1, 2, 3, -1, 5, -10, -8, 15]
negativos(vetor)