// Neste exemplo, são passados 3 argumentos diferentes:
// string, number e string.

console.log(
  'Meu nome é "Abraão". Estou aprendendo JavaScript às',
  10,
  "da manhã.",
);

// Neste exemplo, ao concatenar usando o operador "+",
// o number é convertido para string, resultando em um único argumento do tipo string.

console.log(
  'Meu nome é "Abraão". Estou aprendendo JavaScript às ' + 10 + " da manhã.",
);

console.log(
  'Meu nome é "Abraão". Estou aprendendo JavaScript às' +
    " " +
    10 +
    " " +
    "da manhã.",
);

// Usando template literal, o valor 10 é avaliado como number,
// mas é convertido para string ao ser inserido no texto.
// O resultado final é um único argumento do tipo string.

console.log(
  `Meu nome é "Abraão". Estou aprendendo JavaScript às ${10} da manhã.`,
);
