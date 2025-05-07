// Esercizio 17 Crea un oggetto

const person = {
  name: "Luigi",
  age: 28,
  city: "Milano",
};
console.log(person);

//Esercizio 18 Accedi alle proprietà

console.log(person.age);

person.age = 32;

// Esercizio 19 Modifica la proprietà

console.log(person.age);

// Esercizio 20 Agguingi una nuova proprietà

person.job = "Architetto";

console.log(person);

// Esercizio 21 Iterazione delle proprietà

for (let property in person) {
  console.log(`${property}: ${person[property]}`);
}

// Esercizio 22 Funzioni annidate

function outerFunction(x) {
  function innerFunction(y) {
    return x + y;
  }
  return innerFunction;
}
console.log(outerFunction(10)(5));
