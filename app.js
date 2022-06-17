const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const SponsorCodeRouter = require('./routes/SponsorCodeRoute')
const SponsorshipRouter = require('./routes/SponsorshipRoute')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/sponsor-code', SponsorCodeRouter)
app.use('/api/sponsorship', SponsorshipRouter)

module.exports = app
