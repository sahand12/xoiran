const faker = require('faker');
faker.locale = 'fa';

const games = [
  {
    _id: faker.random.uuid(),
    name: 'tic-tac-toe',
    createdAt: faker.date.past(2),
    updatedAt: faker.date.recent(20),
    t: {
      fa: {
        name: 'ایکس‌او',
      }
    }
  },
  {
    _id: faker.random.uuid(),
    name: 'ultimate tic-tac-toe',
    createdAt: faker.date.past(2),
    updatedAt: faker.date.recent(20),
    t: {
      fa: {
        name: 'ایکس‌او پیشرفته',
      }
    }
  },
  {
    _id: faker.random.uuid(),
    name: 'dots and boxes',
    createdAt: faker.date.past(2),
    updatedAt: faker.date.recent(20),
    t: {
      fa: {
        name: 'نقطه‌بازی',
      }
    }
  },
  {
    _id: faker.random.uuid(),
    name: 'chess',
    createdAt: faker.date.past(2),
    updatedAt: faker.date.recent(20),
    t: {
      fa: {
        name: 'شطرنج',
      }
    }
  },
];

console.log(require('util').inspect(games, false, 10));
module.exports = games;
