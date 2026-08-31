const pessoa1 = {
  nome: "Jesus",
  sobrenome: "Cristo",
  idade: 33,
};

const pessoa2 = {
  nome: "Maria",
  sobrenome: "Madalena",
  idade: 50,
};

// console.log(pessoa1.nome);
// console.log(pessoa2.nome);

// function criaPessoa(nome, sobrenome, idade) {
//   return {
//     nome: nome,
//     sobrenome: sobrenome,
//     idade: idade,
//   };
// }

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  };
}

// console.log(criaPessoa("Jesus", "Cristo", 33));

const pessoa3 = criaPessoa("Jesus", "Cristo", 33);
const pessoa4 = criaPessoa("Jesus", "Cristo", 33);
const pessoa5 = criaPessoa("Jesus", "Cristo", 33);

// console.log(pessoa3);

const pessoa6 = {
  nome: "Maria",
  sobrenome: "Madalena",
  idade: 50,
  saudacao: function () {
    return `Bem-vindo(a), ${this.nome}!`;
  },
};

console.log(pessoa6.saudacao());
