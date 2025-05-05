// Esercizio 11 - if,else & else-if
let score = parseInt(prompt('Inserisci il tuo voto'));

if (!isNaN(score) && score >= 0 && score <= 100) {
  if (score >= 90 && score <= 100) {
    console.log("voto ottimo");
  } else if (score >= 70 && score <= 89) {
    console.log("voto buono");
  } else if (score >= 60 && score <= 69) {
    console.log("voto sufficiente");
  } else {
    console.log("voto insufficiente");
  }
} 
else {
  console.log("Valore non valido");
}