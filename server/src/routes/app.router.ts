import { Router } from 'express'
import { SamplesRouter } from './samples'

export type tApiFunc = {
  
}

let AppRouter = Router()

AppRouter.use('/samples', SamplesRouter)

export default AppRouter
