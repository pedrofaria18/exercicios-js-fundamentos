/* Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:  
Plano Aumento 
  A    10% 
  B    15% 
  C    20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function planoSlario(planoTrabalho, salarioAtual) {
    switch(planoTrabalho) {
        case 'A':
            return salarioAtual + salarioAtual * (10/100)
        case 'B':
            return salarioAtual + salarioAtual * (15/100)
        case 'C':
            return salarioAtual + salarioAtual * (20/100)
        default:
            return 'Plano Aumento inválido'
    }
}
console.log(planoSlario('A', 1000))
console.log(planoSlario('B', 1000))
console.log(planoSlario('C', 1000))
console.log(planoSlario('D', 1000))