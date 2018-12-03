const initialList = [
  { name: 'Liara', score: 2 },
  { name: 'Shepard', score: 42 },
  { name: 'Tali', score: 13 },
  { name: 'Garrus', score: 9 },
  { name: 'Wrex', score: 85 },
  { name: 'Ash', score: 37 }
];

// Refactor this imperative code (from line 13 to 34) to get the
// same result with Array methods such as map, filter and join

let characters = [];

for (const character of initialList) {
  if (character.score > 10) {
    // Transform character so we only have its name
    const characterName = character.name;

    // Add the character to the list
    characters.push(characterName);
  }
}

// Then join them all into a string
let result = '';

for (let i = 0; i < characters.length; i++) {
  if (i > 0) { // Add a return for every entry...
    result += ' > ' + (i + 1) + '. ' + characters[i];
  } else { // ...except for the first one
    result = '1. ' + characters[i];
  }
}

console.log(result); // -> 1. Shepard > 2. Tali > 3. Wrex > 4. Ash
