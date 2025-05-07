// Esercizio 25 Object.keys()

const student = {
  name: "Phil",
  age: 16,
  grade: "11th",
  school: "Chambanana High School",
};

console.log(Object.keys(student));

// Esercizio 26 Object.values()

console.log(Object.values(student));

// Esercizio 27 Object.entries()
const entries = Object.entries(student);
console.log(entries);

for (const [key, value] of Object.entries(student)) {
  console.log(`${key}: ${value}`);
}

// Esercizio 28 forEach & map
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((element) => console.log(element * 2));

const squaredNumbers = numbers.map((x) => x * x);
console.log(squaredNumbers);
