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

// Okay, let's try to implement an Array filter function with reduce
const filterBy = fn => {
  // Implement the reducer here
  // Hint: this should return a reducer function
};
const filterArray = (arr, fn) => arr.reduce(filterBy(fn), []);

console.log(
  filterArray(numbers, number => number % 2 === 0) // -> should output [ 2, 4 ]
);
