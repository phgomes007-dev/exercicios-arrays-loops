/*Declare um array com alguns números inteiros quaisquer.
Depois, faça um programa que calcule a maior diferença
entre dois números desse array*/


const numeros = [8, 11, 4, 1];
let nMaior = numeros [0];
let nMenor = numeros[0];
for(let i = 1; i < numeros.length; i++ ){
    if(numeros[i] > nMaior ){
        nMaior = numeros[i];
    }
    if(numeros[i] < nMenor){
        nMenor = numeros[i];
    }

}
const mDiferenca = nMaior - nMenor;
console.log(mDiferenca);
