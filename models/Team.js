const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const TeamSchema = new mongoose.Schema({
  name: String,
  flag: {
    $type: ObjectId,
    ref: 'Flag',
  },
  creator: {
    $type: ObjectId,
    ref: 'User',
  },
  captain: {
    $type: ObjectId,
    ref: 'User',
  },
  manager: {
    $type: ObjectId,
    ref: 'User',
  },
  players: {
    $type: ObjectId,
    ref: 'User',
  },
  t: {
    fa: {
      name: String,
    },
  },
});

module.exports = TeamSchema;