const mongoose = require('mongoose')

module.exports = mongoose.model('SponsorCode', {
  id: { type: String, required: true },
  user: { type: String, required: true },
  code: { type: String, required: true, unique: true }
})
