// Esercizio 9 - Richiesta di input corretto //
let parola;

do {
    parola = prompt ('Inserisci una parola con almeno 5 caratteri');
}
while (parola.length < 5);

console.log("La tua parola è" + " " + parola);