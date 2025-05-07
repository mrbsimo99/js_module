// Esercizio 16 - Popolamento Array
const parole = []

for (let i = 0; i < 5; i++) {
let parola = prompt('Inserisci una parola');
parole.push(parola);
 }

 for (let i= 0; i < parole.length; i++) {
    if (parole[i].length % 2 != 0) {
        console.log(`"${parole[i]}" è una parola dispari`)
    }
 }