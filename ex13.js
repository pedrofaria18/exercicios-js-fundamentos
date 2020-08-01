/*  ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch */

function diasSemana(dia) {
    switch(dia){
    case 1:
        return 'Domingo é fim de semana'
    case 2:
        return 'Segunda-Feira é dia útil'
    case 3:
        return 'Tarça-Feira é dia útil'
    case 4:
        return 'Quarta-Feira é dia útil'
    case 5:
        return 'Quinta-Feira é dia útil'
    case 6:
        return 'Sexta-Feira é dia útil'
    case 7:
        return 'Sábado é fim de semana'
    default:
        return 'Dia inválido'
    }
}

console.log(diasSemana(1))
console.log(diasSemana(2))
console.log(diasSemana(3))
console.log(diasSemana(4))
console.log(diasSemana(5))
console.log(diasSemana(6))
console.log(diasSemana(7))
console.log(diasSemana(8))
