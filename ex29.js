/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] 
(repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações. */

function intervalo (vetorNumeros) {
    qtdDentroIntervalo = 0
    qtdForaIntervalo = 0

    for(let i = 0 ; i < vetorNumeros.length ; i++) {
        if(vetorNumeros[i] >= 10 && vetorNumeros[i] <= 20) {
            qtdDentroIntervalo++
        } else {
            qtdForaIntervalo++
        }
    }
    
    console.log(`${qtdDentroIntervalo} números dentro do intervalo [10, 20] e ${qtdForaIntervalo} números fora do intervalo [10, 20]`)
}

vetor = [1, 2, 3, 4, 5, 6, 14, 15, 16, 23, 25, 16, 11, 3]
intervalo(vetor)