const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.Promise = Promise;
const MODEL_NAMES = [
  'Game',
  'Match',
  'MatchSet',
  'Prize',
  'RankingTable',
  'Schedule',
  'Tournament',
  'TournamentPhase',
  'TournamentPhaseMatchPair',
  'TournamentPlayer',
  'TournamentRule',
  'User',
];

function init() {
  let schema;
  MODEL_NAMES.forEach(modelName => {
    schema = require(`./${modelName}`);
    mongoose.model(modelName, schema);
  });
}

exports.init = init;