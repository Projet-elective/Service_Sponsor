const mongoose = require('mongoose')
const Schema = require('mongoose')

module.exports = mongoose.model('SponsorShip', {
  idCode: { type: Schema.Types.ObjectId, ref: 'SponsorCode' },
  sponsor: {
    id: String,
    username: String,
    role: String
  },
  sponsored: {
    id: String,
    username: String,
    role: String
  }
})
