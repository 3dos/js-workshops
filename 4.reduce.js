const numbers = [1, 2, 3, 4, 5];

// Use Array.reduce to get the sum of the elements in the list
// instead of the following imperative code

let sum = 0;

for (const number of numbers) {
  sum += number;
}

console.log(
  sum // -> 15
);
