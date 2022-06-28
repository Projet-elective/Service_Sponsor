const mongoose = require('mongoose')
const Schema = require('mongoose')

const SponsorShipSchema = new mongoose.Schema({
  idCode: { type: Schema.Types.ObjectId, ref: 'SponsorCode' },
  sponsor: {
    id: Number,
    role: String
  },
  sponsored: {
    id: Number,
    role: String
  }
});

const SponsorShip = mongoose.model('Sponsorship', SponsorShipSchema);
module.exports = SponsorShip;
