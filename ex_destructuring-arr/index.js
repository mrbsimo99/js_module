// Estrazione elementi base 

let numeri = [1 , 3, 5, 9, 12, 18]; 

let [primo, secondo, terzo, quarto, quinto, sesto] = numeri;

console.log(primo, secondo);

// Saltare elementi durante il destructuring 

console.log(primo,terzo)

// Destructuring con valori predefiniti

let persona = ["Mario", "Verdi", 28, "Barista"];

let [nome, cognome, età, professione, stato = "celibe"] = persona;

console.log(nome, cognome, età, professione , stato)

