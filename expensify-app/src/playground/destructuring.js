const item = ['(iced) coffee', '$2.00', '$2.50', '$2.75'];

console.log(`A medium Coffee (hot) costs $2.50`);

const [coffeeType, , priceMedium] = item;
console.log(`A medium ${coffeeType} costs ${priceMedium}`);
// const address = ['25 Morton St', 'Boston', 'MA', '02125'];
// // console.log(`You are in ${address[1]} ${address[2]}.`);
//
// const [, city, state] = address;
// console.log(`You are in ${city} ${state}.`);



// const person = {
//   name: 'Dunia',
//   age: 32,
//   location: {
//     city: 'Boston',
//     temp: 40
//   }
// };
//
// const { name, age } = person;
// console.log(`${name} is ${age}.`);
// // const name = person.name;
// // const age = person.age;
//
//
// const { city, temp } = person.location;
// if (city && temp) {
//   console.log(`It's ${temp} in ${city}.`);
// }



// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// if (person.location.city && person.location.temp) {
//   console.log(`It's ${person.location.temp} in ${person.location.city}.`);
// }


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);
