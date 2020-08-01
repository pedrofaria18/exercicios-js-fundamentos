/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
 1) crianças com menos de 10 anos pagam R$80;
 2) conveniados com idade entre 10 e 30 anos pagam R$50; 
 3) conveniados com idade acima de  30 e até 60 anos pagam R$ 95; 
 4) conveniados acima de 60 anos pagam R$130 */

function valorConvenio (idadeConveniado) {
    let valorFinal = 0
    let valorFixo = 100
    
    if(idadeConveniado < 10) {
        valorFinal = valorFixo + 80
        return `O valor total a ser pago será de R$ ${valorFinal}`
    }else if(idadeConveniado >= 10 && idadeConveniado <= 30) {
        valorFinal = valorFixo + 50
        return `O valor total a ser pago será de R$ ${valorFinal}`
    }else if(idadeConveniado > 30 && idadeConveniado <= 60) {
        valorFinal = valorFixo + 95
        return `O valor total a ser pago será de R$ ${valorFinal}`
    }else if(idadeConveniado > 60) {
        valorFinal = valorFixo + 130
        return `O valor total a ser pago será de R$ ${valorFinal}`
    }
}   

console.log(valorConvenio(5))
console.log(valorConvenio(25))
console.log(valorConvenio(50))
console.log(valorConvenio(70))