import { Router, Request, Response } from 'express'
import { Sample } from '../../models'

const SamplesRouter = Router()

SamplesRouter.route('/').get((req: Request, res: Response) => {
  Sample.find
})

export default SamplesRouter
