const mongoose = require('mongoose')
const {Schema} = require('mongoose');

const SponsorCodeSchema = new mongoose.Schema({
  user: Number,
  code: String,
  role: String
});

const SponsorCode = mongoose.model('SponsorCode', SponsorCodeSchema);
module.exports = SponsorCode;
