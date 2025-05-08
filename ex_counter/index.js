// Esercizio 24 Counter
function createCounter(initialValue) {
  let count = initialValue;

  function increment() {
    count++;
    return count;
  }

  function decrement() {
    count--;
    return count;
  }
  return { increment, decrement };
}
const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.decrement());

