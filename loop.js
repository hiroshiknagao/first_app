//for (let counter = 5; counter < 11; counter++) {
//  console.log(counter)
//}
//
//for (let i = 3; i >= 0; i--) {
//  console.log(i)
//}
 //const animals = ['cat', 'dog', 'bear']
 //for (let i = 0; i < animals.length; i++) {
 // console.log(animals[i]);
 //}

 //nested loop
 const array1 = [6, 19, 20];
 const array2 = [19, 81,2];
 for (let i = 0; i < array1.length; i++){
  for (let j = 0; j < array2.length; j++) {
    if (array1[i] === array2[j]) {
      console.log(`Both arrays have the number: ${array2[j]}`)
    }
  }
 }
// while loop
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++
};

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random()*4)];

  console.log(currentCard);
}
//do while statement
let cupsOfSugarNeeded = 4;
let cupsAdded = 0;

do {
  cupsAdded++
  console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded);

console.log(cupsOfSugarNeeded)

//the break keyword
const rapperArray = ["ODB", "Jay-Z", "Biggie", "2pac"];
for (let i = 0; i < rapperArray.length; i ++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Biggie') {
    break;
  }
}
console.log("And if you don't know, now you know");
