// esercizio 29 filter&find

const students = [
  { name: "Mario", grade: 80 },
  { name: "Luigi", grade: 59 },
  { name: "Francesco", grade: 86 },
  { name: "Giovanna", grade: 98 },
  { name: "Giulia", grade: 73 },
];

const passedStudents = students.filter((student) => student.grade >= 60);
const bocciatoPierchicco = students.find((student) => student.grade < 60);

console.log(passedStudents);
console.log(bocciatoPierchicco);

// esercizio 30 reduce & sort
const expenses = [400, 50, 20, 80];
// 400 + 50 + 20 + 80
const totalExpenses = expenses.reduce(
  (accumulator, current) => accumulator + current
);
console.log(totalExpenses);

const words = ["banana", "apple", "cherry", "date"];
words.sort();

console.log(words);
