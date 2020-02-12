import { Router, Request, Response, NextFunction } from 'express'
import { SamplesRouter } from './samples'

export type tApiFunc = (_req: Request, _res: Response, _next?: NextFunction) => Promise<any>

export const composeApiFunc = (_callback: tApiFunc): tApiFunc => async (_req: Request, _res: Response, _next?: NextFunction) => {
  _callback(_req, _res, _next)
    .catch(_next)
} 

let AppRouter = Router()

AppRouter.use('/samples', SamplesRouter)

export default AppRouter
