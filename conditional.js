let sale = true;
sale = false;

if (sale) {
  console.log('Time to buy!')
} else {
  console.log('time to wait for a sale')
};

let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log('time to eat')
} else {
  console.log('We can eat later')
};

let mood = 'sleepy';
let tirednessLevel = 6;
if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep')
} else {
  console.log('not bed time yet')
};

let favoritePhrase = '';

if (favoritePhrase) {
  console.log('this string doesn"t seem to be empty.')
} else {
  console.log('this string is def empty')
};

// ternary operator
let isLocked = true;

isLocked ? console.log('You will need a key to open the door') :
console.log('You do not need a key to open the door');

let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favPhrase = 'You are a cunt:)';
favPhrase === 'You are a cunt:)' ? console.log('I love that!'):
console.log('I do not love that...')
