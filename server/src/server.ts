import * as express from 'express'
import * as cors from 'cors'
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session'
import * as passport from 'passport'
import { config } from 'dotenv'
import { connect, connection } from 'mongoose'
import { AppRouter } from './routes'
import { PassportConfig } from './config'

/**
 * Environment configs.
 */
config()

/**
 * Server settup.
 */
const app = express()
const port = process.env.PORT || 5000

/**
 * Passport configurations.
 */
PassportConfig()

/**
 * Middleware.
 */
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(session({ secret: process.env.SESSION_SECRET || 'some secret key here' }))
app.use(passport.initialize())
app.use(passport.session())

/**
 * Connect to some database.
 * For now I am using mongoDB Atlas. ¯\_(ツ)_/¯
 */
const uri: string = process.env.ATLAS_URI || ''
connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
connection.once('open', () => {
  console.log('MongoDB connection has been established. Good hunting out there.')
})

/**
 * Register routes.
 */
app.use('/api', AppRouter)

/**
 * Start server.
 */
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
  console.log(`Git hackin, yo dawg.`)
})
