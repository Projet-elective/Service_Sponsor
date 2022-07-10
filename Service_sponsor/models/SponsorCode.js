const mongoose = require('mongoose')
const {Schema} = require('mongoose');

const SponsorCodeSchema = new mongoose.Schema({
  user: String,
  code: String,
  role: String
});

const SponsorCode = mongoose.model('SponsorCode', SponsorCodeSchema);
module.exports = SponsorCode;
