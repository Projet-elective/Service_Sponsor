const mongoose = require('mongoose')

module.exports = mongoose.model('SponsorCode', {
  user: String,
  code: String
})
