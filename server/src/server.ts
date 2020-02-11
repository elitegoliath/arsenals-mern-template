import * as Express from 'express'
import * as Cors from 'cors'
import { config } from 'dotenv'

// Environment configs.
config()

// Server settup.
const app = Express()
const port = process.env.PORT || 5000

// Middleware
app.use(Cors())
app.use(Express.json())

// Start server.
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
  console.log(`Git hackin, yo dawg.`)
})
