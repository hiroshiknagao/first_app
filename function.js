function getReminder() {
  console.log("Water the plants.")
};

function greetInSpanish() {
  console.log('Hola!')
}

getReminder();
greetInSpanish();

//function with parameters

function sayThanks(name) {
  console.log(`Thank you for your purchase ${name}! We appreciate your business.`)
};

sayThanks('Kai');

//default parameters
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
};

makeShoppingList('kombucha', 'beef', 'eggs');

//return
function calculate(rows, columns) {
  return rows * columns
}

const numOfMonitors = calculate(5, 4)
console.log(numOfMonitors);

// helper function
function multipleByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multipleByNineFifths(celsius) + 32;
};

getFahrenheit(15);
//function expression
const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true
  } else {
    return false
  }
};
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));
