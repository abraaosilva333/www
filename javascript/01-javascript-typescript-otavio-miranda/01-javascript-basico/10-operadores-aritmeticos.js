/*
Operações matemáticas básicas:
+ soma dois números ou junta textos / concatenação;
-
*
/
% resto de uma divisão;
** eleve um número à potência de outro;
*/

// ** = potência
// let number1 = 2;
// let number2 = 10;

// 2^10 -> 2×2×2×2×2×2×2×2×2×2 = 1024
// console.log(number1 ** number2);

// % = resto de uma divisão
// let number1 = 2;
// let number2 = 10;

// console.log(number1 % number2);

// ++ incremento

let count = 4;
// pós-incremento = imprime primeiro, soma depois
// count++;
// console.log(count++);
// console.log(count);

// pré-incremento = soma primeiro, imprime depois
// ++count;
// console.log(++count);

// -- decremento
// count--;
// --count;
// console.log(count);

let x = 10;
let y = x++; // y recebe 10 (o valor de x antes de somar), e x vira 11.

// console.log("x", x);
// console.log("y", y);

let a = 10;
let b = ++a; // a vira 11, e b recebe 11 (o valor já atualizado).

// console.log(a); // a mudou
// console.log(b); // b pegou novo valor

/*
Operadores de atribuição
= ou seja, x = 10
+= ou seja, x = x + 10
-= ou seja, x = x - 10
*= ou seja, x = x * 10
**= ou seja, x = x ** 10
/= ou seja, x = x / 10
%= ou seja, x = x % 3
*/

let number1 = parseInt("2");
let number2 = parseFloat("10.5");
let number3 = Number("10.1");
let number4 = Number("10");

let result = number1 + number2;
let result2 = number3 + number4;

// console.log(result);
console.log(result2);

// console.log(typeof(number1));
