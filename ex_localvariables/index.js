// Esercizio 23 Persistenza delle variabili locali

function outerFunction(x, initialValue) {
  let result = initialValue;

  function innerFunction(y) {
    result += y;
    return result;
  }
  return innerFunction;
}
console.log(outerFunction(10, 5)(5));
