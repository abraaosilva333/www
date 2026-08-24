//               01234567
let umaString = "Um texto";
//           0123456789
let texto = "O gato viu outro gata";

console.log(umaString[7]);
// charAt() -> descobre qual caractere está em uma determinada posição (índice)
console.log(umaString.charAt(7));

console.log(umaString.concat("ou", " ", "uma", " ", "palavra"));
console.log(umaString.concat(" ou uma palavra"));
console.log(umaString.lastIndexOf("e", 3));

// indexOf() -> descobre em qual posição (índice) um caractere está
console.log(texto.indexOf("g"));

console.log(texto.indexOf("g", 2));
// retorna -1 caso não existe

// match() e search() servem para procurar padrões em strings, principalmente usando expressões regulares
console.log(umaString.match(/texto/));

// ou seja, match() -> o que foi encontrado?
console.log(texto.match(/gato/g));

// já search() -> em qual posição foi encontrado?
console.log(texto.search(/outro/));

// replace() -> substitui a primeira ocorrência encontrada
console.log(texto.replace("gato", "gata"));
// replaceAll() -> substitui todas as ocorrências
console.log(texto.replaceAll("gato", "gata"));

console.log(texto.length);

console.log(texto.slice(2, 6));
console.log(texto.slice(-5));

console.log(texto.substring(2, 6));
// substring() não interpreta índices negativos a partir do final,
// diferente de slice().
console.log(texto.substring(-5));
// por recomendação, sempre usar o slice().

// serve para dividir uma string em partes e transformar o resultado em um array

console.log(texto.split(" "));
console.log(texto.split("")); // aqui uso uma string vazia como separador, então ele separa cada caractere
console.log(texto.split(" ", 3)); // aqui defini um limite de 3 elementos no array resultante

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());