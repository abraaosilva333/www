const name = "Abraão";
const age = 27;
let weight = 80;
let height = 1.7;
// let imc = weigth / (heigth * heigth);
let imc = weight / height ** 2;
let yearOfBirth = 1999;

console.log(
  `${name} tem ${age} anos, pesa ${weight} kg, mede ${height} m de altura e seu IMC é ${imc.toFixed(2)}.`,
);

console.log(`${name} nasceu em ${yearOfBirth}.`);
