const numbers = [1, 2, 3, 4, 5];

const add = (x, y) => x + y;

// Use currying on add to refactor the following map in a point free style

const result = numbers.map(number => add(4, number));

console.log(result); // -> [ 5, 6, 7, 8, 9 ]
