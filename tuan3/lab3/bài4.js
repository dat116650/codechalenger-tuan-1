const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
  ];
  
  // Yêu cầu 1
  dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));
  
  // Yêu cầu 2
  const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
  console.log(`Sarah's dog is eating too ${sarahsDog.curFood > sarahsDog.recommendedFood ? 'much' : 'little'}`);
  
  // Yêu cầu 3
  const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);
  const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);
  
  // Yêu cầu 4
  console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
  console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
  
  // Yêu cầu 5
  console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
  
  // Yêu cầu 6
  const checkEatingOkay = dog => dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10;
  console.log(dogs.some(checkEatingOkay));
  
  // Yêu cầu 7
  console.log(dogs.filter(checkEatingOkay));
  
  // Yêu cầu 8
  const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
  console.log(dogsSorted);