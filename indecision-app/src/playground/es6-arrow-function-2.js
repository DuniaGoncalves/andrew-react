// arguments object - no longer bound with arrow functions
const add = (a, b) => {
  return a + b;
};

console.log(add(55, 1));
// this keyword - no longer bound


const user = {
  name: 'Dunia',
  cities: ['Boston', 'Amherst', 'Randolph', 'Quincy'],
  printPlacesLived() {
    // map is array method like forEach but different with map you can transform each item creating the message right in return
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());
// challenge area

const multiplier = {
  numbers: [ 2, 4, 6],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number)
  }
};

console.log(multiplier.multiply());
// challenge

// const userPet = {
//   name: 'Dunia',
//   pets: ['cat', 'dog', 'fish', 'rabbit'],
//   printPets() {
//     return this.pets.map((pet) => this.name + ' has had a' + pet);
//   }
// };

// console.log(userPet.printPets());
