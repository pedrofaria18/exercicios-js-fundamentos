/*  Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. 
(Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo). */

function triangulos(lado1, lado2, lado3) {
    if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
        console.log('Esse é um triângulo Escaleno')
    } else if (lado1 == lado2 && lado2 == lado3 && lado1 == lado3) {
        console.log('Esse é um triângulo Equilátero')
    } else {
        console.log('Esse é um triângulo Isóceles')
    }
}

triangulos(1, 1, 1)
triangulos(1, 1, 2)
triangulos(1, 2, 3)