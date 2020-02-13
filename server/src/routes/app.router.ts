import { Router } from 'express'
import { SamplesRouter } from './samples'

let AppRouter = Router()

AppRouter.use('/samples', SamplesRouter)

export default AppRouter
