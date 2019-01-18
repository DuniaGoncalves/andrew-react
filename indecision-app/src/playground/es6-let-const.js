var nameVar = 'Dunia';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Bill';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);


//Block Scope
const fullName = 'Dunia Imara';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
