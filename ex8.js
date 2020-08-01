/* Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. 
Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, 
escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo). 
Obs.: O primeiro jogo não conta como novo recorde do melhor.  Exemplo:  String: “10 20 20 8 25 3 0 30 1” Retorno: [3, 7] 
(Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação aconteceu no sétimo jogo.)  */

let pontuacaoString = "30, 20, 50, 0, 10, 13, 14, 29"

function avaliaPontucacao(pontuacaoString) {
    let pontuacao = pontuacaoString.split(', ') // O método split() divide um objeto String em um array de strings ao separar a string em substrings.

    let recorde = 0
    let piorJogo = 1

    let maiorPontuacao = pontuacao[0]
    let menorPontuacao = pontuacao[0]

    for(let i = 0 ; i < pontuacao.length ; i++) {
        if(pontuacao[i] > maiorPontuacao) {
            maiorPontuacao = pontuacao[i]
            recorde++
        }else if (pontuacao[i] < menorPontuacao) {
            menorPontuacao = pontuacao[i]
            piorJogo = i+1;
        }
    }
    return [recorde, piorJogo]
}
console.log(avaliaPontucacao(pontuacaoString))

