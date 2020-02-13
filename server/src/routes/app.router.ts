import { Router } from 'express'
import { SamplesRouter } from './samples'
import { UserRouter } from './user'

let AppRouter = Router()

AppRouter.use('/samples', SamplesRouter)
AppRouter.use('/user', UserRouter)

export default AppRouter
