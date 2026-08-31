const numero = Number(prompt("Seu número é:"));

document.body.innerHTML += `Seu número é: ${numero}<br />`;

document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(numero)}<br />`;
// document.body.innerHTML += `Raiz quadrada: ${numero ** 0.5}<br />`;

document.body.innerHTML += `${numero} é inteiro?: ${Number.isInteger(numero) ? "Sim" : "Não"}<br />`;

document.body.innerHTML += `É um NaN?: ${Number.isNaN(numero) ? "Sim" : "Não"}<br />`;

document.body.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}<br />`;

document.body.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}<br />`;

document.body.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}<br />`;
