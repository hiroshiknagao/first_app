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
