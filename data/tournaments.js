const faker = require('faker');
const {inspect} = require('util');
const users = require('./users');

let tournaments = [
  createTournament(
    '1396 best chess player of iran',
    'بهترین شطرنج‌باز ایران در سال ',
    faker.lorem.paragraph(),
    'بهترین شطرنج‌باز ایران در سال ۱۳۹۶'.repeat(3),
    ),
  createTournament(
    '1397 best tic-tac-toe player of iran',
    'بهترین  بازیکن ایکس‌او در سال ۱۳۹۷',
    faker.lorem.paragraph(),
    'بهترین  بازیکن ایکس‌او در سال ۱۳۹۷'.repeat(4),
  ),
  createTournament(
    '1397 best dots and boxes player of iran',
    'بهترین بازیکن نقطه‌بازی ایران در سال ۱۳۹۷',
    faker.lorem.paragraph(),
    'بهترین بازیکن نقطه‌بازی ایران در سال ۱۳۹۷'.repeat(5),
  ),
  createTournament(
    'best chess player of the month',
    'بهترین بازیکن شطرنج در این ماه',
    faker.lorem.paragraph(),
    'بهترین بازیکن شطرنج در این ماه'.repeat(3),
    ),
  createTournament(
    'Feb 2018 best ultimate tic-tac-toe player',
    'بهترین بازیکن ایکس‌او پیشرفته در اردیبهشت ماه ۱۳۹۷',
    faker.lorem.paragraph(),
    'بهترین بازیکن ایکس‌او پیشرفته در اردیبهشت ماه ۱۳۹۷'.repeat(3),
    ),
];

tournaments = tournaments.map((trn) => {
  return Object.assign(trn, {
    _id: faker.random.uuid(),
    organizers: [users[Math.floor(Math.random() * users.length)]._id],
  });
});

function createTournament(name, nameFa, description, descriptionFa) {
  return {
    name,
    description,
    t: {
      fa: {
        name: nameFa,
        description: descriptionFa,
      },
    },
  };
}

console.log(JSON.stringify(tournaments));
module.exports = tournaments;