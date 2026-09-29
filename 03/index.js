/*Crie um array de números inteiros.
Faça um programa que verifica se existe o número 10 nesse array.
Caso exista, informa a posição (índice) em que o número 10 se encontra.
Caso não exista, deverá ser impresso -1.*/


const numeros = [54, 22, 14, 87, 284];
//const numeros = [54, 22, 14, 10, 284];// para fazer a parte B que resulta em 3
let posicao = -1;
for (let i = 0; i < numeros.length; i++){
    if(numeros[i] === 10){
        posicao = i;
        break;
    }
}
console.log(posicao);
