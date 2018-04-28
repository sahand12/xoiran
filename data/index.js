const faker = require('faker');
faker.locale = 'fa';
faker.seed(123);

const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomCard = faker.helpers.createCard();

console.log(randomCard);
