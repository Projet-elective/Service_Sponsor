const mongoose = require('mongoose')

module.exports = mongoose.model('SponsorShip', {
  id: { type: String, required: true },
  sponsor: {
    id: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true }
  },
  sponsored: {
    id: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true }
  }
})
