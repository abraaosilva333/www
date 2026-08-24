let num1 = 1; // number
let num2 = 1.23456;

/* console.log(typeof num1.toString()); // aqui é string
console.log(typeof num1); // aqui é number

console.log(typeof num2.toFixed(2)); // formata um número com uma quantidade específica de casas decimais
// toFixed() retorna uma string e não um number */

console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));

const resultado = 10 * "Olá";
const resultado2 = 10 * "5"; // O javascript faz uma conversão implícita de tipo. O operador (*) é exclusivamente matemático, então ele percebe que "5" pode ser convertido para um número. Ou seja, por debaixo dos panos, ele faz algo como Number("5").

console.log(resultado); // NaN = tentei realizar uma operação numérica, mas o resultado não pode ser representado como um número válido.

console.log(Number.isNaN(resultado));
