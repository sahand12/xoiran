const faker = require('faker');
faker.locale = 'fa';

const TOTAL = 100;

const users = [...('0'.repeat(TOTAL))].map(() => ({
  _id: faker.random.uuid(),
  nickname: faker.name.firstName(),
  deleted: false,
  createdAt: faker.date.recent(365),
  updatedAt: faker.date.recent(1),
}));

module.exports = users;