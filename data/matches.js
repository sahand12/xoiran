const faker = require('faker');
const games = require('./games');
const users = require('./users');

const TOTAL = 10;

const matches = [...('1'.repeat(TOTAL))].map((_, i) => {
  const game = games[Math.floor(Math.random() * games.length)];
  const playerOne = users[Math.floor(Math.random() * users.length)];
  const playerTwo = users[Math.floor(Math.random() * users.length)];

  return {
    _id: faker.random.uuid(),
    game: {
      id: game._id,
      name: game.name,
      nameFA: game.t.fa.name,
    },
    playersId: [playerOne._id, playerTwo._id],
  };
});

console.log(matches);

module.exports = matches;