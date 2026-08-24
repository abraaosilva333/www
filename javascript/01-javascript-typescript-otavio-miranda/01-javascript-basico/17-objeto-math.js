/* let num1 = 9;

console.log(Math.ceil(num1)); // arredonda o número para cima.

console.log(Math.floor(num1)); // arredonda o número para baixo.

console.log(Math.round(num1)); // arredonda o número para o inteiro mais próximo.
// 9.1 ou 9.2 = 9

console.log(Math.max(1, 2, 3, 4, 5)); // retorna o maior número de uma sequência de valores.

console.log(Math.min(1, 2, 3, 4, 5)); // retorna o menor número de uma sequência de valores.

console.log(Math.random()); // gera um número aleatório entre 0 (inclusivo) e 1 (exclusivo).

console.log(Math.PI); // retorna o valor de PI.

console.log(Math.pow(2, 10)); // eleva um número a uma potência.

console.log(num1 ** 0.5); // calcula a raiz quadrada de um número.

console.log(num1 ** (1 / 2)); // calcula a raiz quadrada de um número.

console.log(Math.sqrt(num1)); // calcula a raiz quadrada de um número. */

// para gerar números aleatórios de 0 até quase 10.

/* console.log(Math.random() * 10); // gera números de ponto flutuante. para obter números inteiros, podemos usar Math.floor().

console.log(Math.floor(Math.random() * 10)); // gera números inteiros aleatórios de 0 a 9. */

// Math.floor() sempre arredonda para baixo. Por exemplo, 5.9 vira 5.
// Já Math.round() arredonda para o número inteiro mais próximo. Por exemplo, 5.9 vira 6.

// gera números inteiros aleatórios de 5 a 20.
// const numero = Math.floor(Math.random() * 16) + 5;

// console.log(numero);

let min = 5;
let max = 20;

const numerosSorteados = [];

while (numerosSorteados.length < 5) {
  const numero = Math.floor(Math.random() * (max - min + 1)) + min;

  if (!numerosSorteados.includes(numero)) {
    numerosSorteados.push(numero);
  }
}

console.log(numerosSorteados);
