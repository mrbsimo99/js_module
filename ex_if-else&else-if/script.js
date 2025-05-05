// Esercizio 11 - if,else & else-if
let score = parseInt(prompt (''));

if (!isNaN(score)) 
  if (score >= 90 && score <= 100) {
    console.log("voto ottimo");
  } else if (score >= 70 && score <= 89) {
    console.log("voto buono");
  } else if (score >= 60 && score <= 69) {
    console.log("voto sufficiente");
  } else (score <= 59) 
    console.log("voto insufficiente");