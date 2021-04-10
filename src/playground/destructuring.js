// Object destructuring

// console.log('destructuring')

// const person = {
//   age: 27,
//   name: 'Andrew',
//   location: {
//     city: 'Philadelphia',
//     temp: 21
//   }
// }

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if(city && temperature){
//   console.log(`it's ${temperature} in ${city}`);
// }

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin',
  },
};

const { name: publisherName = 'Self-published' } = book.publisher;

console.log(publisherName);

// Array Destructuring
const address = [
  '1299 South Juniper Street',
  'Philadelphia',
  'Pennsylvania',
  '14147',
];

const [, city, state = 'Hawaii'] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['coffee (iced)', '$2.00', '$2.50', '$2.75'];

const [product, , mediumPrice] = item;

console.log(`A medium ${product} costs ${mediumPrice}`);
