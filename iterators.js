const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruitType => console.log(`I wan to eat a ${fruitType}`));
// the map method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich',
  'whale', 'octopus', 'rabbot', 'lion', 'dog'];

  const secretMessage = animals.map(animal => {
    return animal[0]
  });

  // should return 'Helloworld'
  console.log(secretMessage.join(''));

  // create the smallNumbers array below
  const bigNumbers = [100, 200, 300, 400, 500];
  const smallNumbers = bigNumbers.map(number => number/100);
  console.log(smallNumbers);
