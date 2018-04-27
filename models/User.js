const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nickname: String,
  deleted: Boolean,
}, {timestamps: true});

module.exports = userSchema;