/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false. */

function verificaDivisao(num) {
    if(num % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verificaDivisao(6))
console.log(verificaDivisao(5))
console.log(verificaDivisao(20))
console.log(verificaDivisao(36))