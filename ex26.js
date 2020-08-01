/* Fazer um programa para encontrar todos os pares entre 1 e 100. */
function lerPar () {
    for (let num = 1 ; num <= 100 ; num++) {
        if(num % 2 == 0) {
            console.log(num)
        }
    }
}
lerPar()