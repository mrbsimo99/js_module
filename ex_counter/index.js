// Esercizio 24 Counter
function createCounter() {
  let count = 4;
  
  return {
    increment: function () {
      count += 1;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
  };
}

const counter = createCounter();

console.log(counter.increment(4));
console.log(counter.decrement(5));
