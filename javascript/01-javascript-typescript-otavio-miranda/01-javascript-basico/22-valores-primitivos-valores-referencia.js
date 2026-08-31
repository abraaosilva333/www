// strings, numbers, booleans etc. são valores primitivos.

// let a = 10;
// let b = a;

// o valor de "a" é copiado para "b", ou seja, cada variável fica com seu próprio valor.

// arrays, objetos e funções trabalham com referências.

let a = [1, 2, 3];

let b = a; // aqui o array não é copiado. "a" e "b" apontam para o mesmo array na memória.

a.push(4);

console.log(a, b); // [1, 2, 3, 4] [1, 2, 3, 4]

// se eu quiser copiar o array, preciso criar outro array
// spread operator
let c = [...a]; // logo, são dois arrays diferentes
