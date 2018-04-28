const faker = require('faker');

function createTournamentPhases(tournamentId, phasesToCreate, initialRounds) {
  let phases = [];
  for (let i = 0; i < initialRounds; i++) {
    phases.push({
      _id: faker.random.uuid(),
      tournamentId,
      type: 'initial',
      round: i + 1,
      scheduleId: '',
      state: 'scheduled',
    });
  }
  for (let i = 0; i < phasesToCreate.length; i++) {
    phases.push({
      _id: faker.random.uuid(),
      tournamentId,
      type: phasesToCreate[i],
      round: 1,
      scheduleId: '',
      state: 'scheduled',
    });
  }
  return phases;
}

const firstTournamentPhases = createTournamentPhases(
  'f8b4aec8-04eb-4d43-b70f-fa080c232df9',
  ['1/64', '1/32', '1/16', '1/8', '1/4', '1/2', 'final'],
  5,
);

const secondTournamentPhases = createTournamentPhases(
  '09b0601c-0493-4fa2-bd44-0a452a90ea78',
  ['1/16', '1/8', '1/4', '1/2', 'final'],
  3,
);

const thirdTournamentPhases = createTournamentPhases(
  'cd28ddd6-eb7a-4224-8e61-8f0452bad2fd',
  ['1/32', '1/16', '1/8', '1/4', '1/2', 'final'],
  8,
);

const forthTournamentPhases = createTournamentPhases(
  '9fb72758-bb96-4959-992e-4974dd0e6b07',
  ['1/8', '1/4', '1/2', 'final'],
  4,
);

const fifthTournamentPhases = createTournamentPhases(
  '7d8849bb-fbf5-4f38-bd62-ecfed97cb994',
  ['1/32', '1/16', '1/8', '1/4', '1/2', 'final'],
  7,
);

const phases = [
  ...firstTournamentPhases,
  ...secondTournamentPhases,
  ...thirdTournamentPhases,
  ...forthTournamentPhases,
  ...fifthTournamentPhases,
];

console.log(JSON.stringify(phases));
module.exports = phases;