// Esercizio 23 Persistenza delle variabili locali

function outerFunction (x) {
    function innerFunction(y) {
        return x + y;
    }
    return innerFunction;
}
console.log(outerFunction(10)(5));



