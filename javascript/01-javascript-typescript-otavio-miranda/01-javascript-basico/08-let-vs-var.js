// var tem escopo de função;
// let tem escopo de bloco;
// hoisting = elevação ou içamento;

// var
function teste() {
  if (true) {
    var nome = "Abraão";
  }

  console.log(nome); // Abraão
}

// console.log(teste());

// let
function teste() {
  if (true) {
    let nome = "Abraão";
  }

  console.log(nome); // erro
}

console.log(teste());

var name;

console.log(name); // undefined

name = "Abraão";

// Ou seja, o motor do javascript sabe que a variável "name" existe antes
// da atribuição, mas não antecipa a atribuição do valor à variável "name"
// Por isso, antes de receber o valor "Abraão", a variável possui o valor
// undefined.

console.log(name); // Abraão
