import express from 'express'
import 'express-async-errors'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import SponsorCodeRoute from './routes/SponsorCodeRoute'
import SponsorshipRoute from './routes/SponsorshipRoute'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/sponsorships', SponsorshipRoute)
app.use('/api/sponsor-code', SponsorCodeRoute)

export default app
