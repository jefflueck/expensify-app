// object destructing

// const person = {
//   name: 'Jeff',
//   age: 41,
//   location: {
//     city: 'Green Bay',
//     temp: 30
//   }
// }

// const { name = 'Anonymous', age } = person
// console.log(`${name} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// };

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publihserName = 'Self Published' } = book.publisher
// console.log(publihserName)

// Array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']
// const [, city, state = 'New York'] = address
// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);
