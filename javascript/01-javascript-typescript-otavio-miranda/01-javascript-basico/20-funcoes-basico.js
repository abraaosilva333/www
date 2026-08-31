function saudacao(nome) {
  return `Bom dia, ${nome}!`;
}

saudacao("Abraão");

const funcao = saudacao("Jesus");

// console.log(funcao);

function soma(a = 1, b = 2) {
  const resultado = a + b;
  return resultado;
}

// console.log(soma(2));

// const raiz = function (n) {
//   return n ** 0.5;
// };

// console.log(raiz(9));

// arrow function

// const raiz = (n) => n ** 0.5;

const raiz = (n) => {
  return n ** 0.5;
};

console.log(raiz(9));
