/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

function media (vetorNumeros) {
    let soma = 0

    for(let i = 0 ; i < vetorNumeros.length ; i++) {
        soma += vetorNumeros[i]
    }

    let media = soma / vetorNumeros.length

    console.log(`${media}`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
media(vetor)