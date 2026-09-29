/*Declare um array com alguns nomes quaisquer.
Depois, crie um novo array a partir do primeiro que contenha apenas 
os nomes que começam com a letra "A" ou "a"(maiúscula ou minúscula). 
Ao final, imprima a variável que guarda o array.*/




    const nomes = ["Ana", "Joana", "Carlos", "amanda"];
    const nletraA = [ ];
    for (let i = 0; i < nomes.length; i++ ){
        if (nomes [i] [0] === "A" || nomes [i] [0] ==="a"){
            nletraA.push(nomes[i]);
        }
    }
    console.log(nletraA);
