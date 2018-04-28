const faker = require('faker');

function createPrize({type, title, isMonetary, value, tid, titleFa, descFa}) {
  const createdAt = faker.date.past(2);
  return {
    _id: faker.random.uuid(),
    createdAt,
    updatedAt: createdAt,
    type,
    isMonetary,
    description: faker.lorem.sentence(),
    title,
    value,
    tournamentId: tid,
    t: {
      fa: {
        title: titleFa,
        description: descFa,
      },
    },
  };
}
const tids = {
  'f8b4aec8-04eb-4d43-b70f-fa080c232df9': [
    {
      title: '5 million Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 5000000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۵ ملیون تومان پول نقد',
    },
    {
      title: '3 million Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 3000000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۳ ملیون تومان پول نقد',
    },
    {
      title: '1 million Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 1000000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۱ ملیون تومان پول نقد',
    },
    {
      title: '700 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 700000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۷۰۰ هزار تومان پول نقد',
    },
    {
      title: '300 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 300000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۳۰۰ هزار تومان پول نقد',
    },
    {
      title: '250 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 250000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۲۵۰ هزار تومان پول نقد',
    },
    {
      title: '200 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 200000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۲۰۰ هزار تومان پول نقد',
    },
    {
      title: '150 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 150000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۱۵۰ هزار تومان پول نقد',
    },
    {
      title: '100 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 100000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۱۰۰ هزار تومان پول نقد',
    },
    {
      title: '50 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 50000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۵۰ هزار تومان پول نقد',
    }
  ],
  '09b0601c-0493-4fa2-bd44-0a452a90ea78': [
    {
      type: 'other',
      title: 'Apple iPhone X Carbon Black 256Gig',
      isMonetary: false,
      titleFa: 'گوشی موبایل آیفون‌ ایکس مشکی‌مات ۲۵۶ گیگ',
    },
    {
      type: 'other',
      title: '2 Gold Coins',
      isMonetary: false,
      titleFa: '۲ سکه بهار آزادی',
    },
    {
      type: 'other',
      title: '1 Gold Coin',
      isMonetary: false,
      titleFa: '۱ سکه بهار آزادی',
    },
    {
      type: 'other',
      title: '1 half Gold Coin',
      isMonetary: false,
      titleFa: '۱ نیم‌سکه بهار آزادی',
    },
    {
      type: 'other',
      title: '1 quarter Gold Coin',
      isMonetary: false,
      titleFa: '۱ ربع‌سکه بهار آزادی',
    },
    {
      title: '200 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 200000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۲۰۰ هزار تومان پول نقد',
    },
    {
      title: '150 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 150000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۱۵۰ هزار تومان پول نقد',
    },
    {
      title: '100 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 100000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۱۰۰ هزار تومان پول نقد',
    },
    {
      title: '50 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 50000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۵۰ هزار تومان پول نقد',
    },
    {
      title: '25 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 25000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۲۵ هزار تومان پول نقد',
    },
  ],
  'cd28ddd6-eb7a-4224-8e61-8f0452bad2fd': [
    {
      title: '1000 Euros',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 100000,
        currency: 'EUR',
        precision: 2,
      },
      titleFa: '۱۰۰۰ یورو',
    },
    {
      title: '600 Euros',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 60000,
        currency: 'EUR',
        precision: 2,
      },
      titleFa: '۶۰۰ یورو',
    },
    {
      title: '300 Euros',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 30000,
        currency: 'EUR',
        precision: 2,
      },
      titleFa: '۳۰۰ یورو',
    },
    {
      title: '100 Euros',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 10000,
        currency: 'EUR',
        precision: 2,
      },
      titleFa: '۱۰۰ یورو',
    },
    {
      title: '75 Euros',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 7500,
        currency: 'EUR',
        precision: 2,
      },
      titleFa: '۷۵ یورو',
    },
    {
      title: '65 Euros',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 6500,
        currency: 'EUR',
        precision: 2,
      },
      titleFa: '۶۵ یورو',
    },
    {
      title: '55 Euros',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 5500,
        currency: 'EUR',
        precision: 2,
      },
      titleFa: '۵۵ یورو',
    },
    {
      title: '45 Euros',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 4500,
        currency: 'EUR',
        precision: 2,
      },
      titleFa: '۴۵ یورو',
    },
    {
      title: '35 Euros',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 3500,
        currency: 'EUR',
        precision: 2,
      },
      titleFa: '۳۵ یورو',
    },
    {
      title: '25 Euros',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 2500,
        currency: 'EUR',
        precision: 2,
      },
      titleFa: '۲۵ یورو',
    }
  ],
  '9fb72758-bb96-4959-992e-4974dd0e6b07': [
    {
      type: 'other',
      title: 'Peugeot 206 tip 5 black 1397',
      isMonetary: false,
      titleFa: 'ماشین ۲۰۶ تیپ ۵ مشکی ۱۳۹۷',
    },
    {
      title: '5 million Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 5000000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۵ ملیون تومان پول نقد',
    },
    {
      title: '3 million Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 3000000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۳ ملیون تومان پول نقد',
    },
    {
      title: '1 million Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 1000000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۱ ملیون تومان پول نقد',
    },
    {
      title: '700 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 700000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۷۰۰ هزار تومان پول نقد',
    },
    {
      title: '300 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 300000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۳۰۰ هزار تومان پول نقد',
    },
    {
      title: '250 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 250000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۲۵۰ هزار تومان پول نقد',
    },
    {
      title: '200 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 200000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۲۰۰ هزار تومان پول نقد',
    },
    {
      title: '150 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 150000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۱۵۰ هزار تومان پول نقد',
    },
    {
      title: '100 thousands Toman',
      type: 'cash',
      isMonetary: true,
      value: {
        amount: 100000,
        currency: 'IRT',
        precision: 0,
      },
      titleFa: '۱۰۰ هزار تومان پول نقد',
    },
  ],
};
const firstTournamentPrizes = [
  createPrize({
    tid,
    type: 'cash',
    isMonetary: true,
    value: {
      amount: ''
    }
  }),
];
