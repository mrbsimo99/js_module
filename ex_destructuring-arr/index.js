// Estrazione elementi base 

let numeri = [1 , 3, 5, 9, 12, 18]; 

let [primo,, terzo, quarto, quinto, sesto] = numeri;

console.log(primo, quarto);

// Saltare elementi durante il destructuring 

console.log(primo,terzo)

// Destructuring con valori predefiniti

let persona = ["Mario", "Verdi", 28, "Barista"];

let [nome, cognome, età, professione, stato = "celibe"] = persona;

console.log(nome, cognome, età, professione , stato)


// Copia di un array

const numbers = [1, 3, 5, 7, 9]
const OddNumbers = [...numbers]

console.log(numbers)
console.log(OddNumbers)

// Unione di due array

const EvenNumbers = [2, 4, 6, 8, 10]
const AllNumbers = [...OddNumbers, ...EvenNumbers]

console.log(AllNumbers)

// Destructuring array con rest operator

const arr = [2, 4, 6, 8, 10]

let [valore1, valore2, ...altriValori] = arr;

console.log(valore1)
console.log(valore2)
console.log(...altriValori)
