const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: String,
  t: {
    fa: {
      name: String,
    }
  },
}, {timestamps: true});

module.exports = gameSchema;