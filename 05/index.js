/*Declare um array com alguns números inteiros quaisquer.

Depois, percorra este array, filtrando apenas os números pares e os armazenando em um novo array.

Ao final, imprima a variável do array contendo apenas os números pares no console.*/



const original = [1, 4, 12, 21, 53, 88, 112];
const npares = [ ];
for ( let i = 0; i < original.length; i++){
    if(original[i] % 2 === 0){
        npares.push(original[i]);

    }
}
console.log(npares);