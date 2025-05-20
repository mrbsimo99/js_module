// Esercizio 1 // Dichiarazione di variabili
let nome = "Simone";
const cognome = "Morabito";

console.log(nome);
console.log(cognome);

// Esercizio 2 // Cambio di valore
let num = 5;
console.log(num);

num = 15;
console.log(num);

// Esercizio 3 // Ridefinizione di variabili

let number = 10;
{
  let number = 20;
  console.log(number);
}
console.log(number);

// Esercizio 4 // Scoping delle variabili

let outside = 30;
{
  let inside = 31;
  console.log(outside, inside);
}

// console.log(outside,inside); //

// Esercizio 5 // Genera numeri pari
for (let i = 1; i <= 20; i++)
  if (i % 2 === 0) {
    console.log(i);
  }

// Esercizio 6 // Numeri dispari decrescenti
let i = 10;
while (i >= 1) {
  if (i % 2 != 0) {
    console.log(i);
  }
  i--;
}
