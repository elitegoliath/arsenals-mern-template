import { Router, Request, Response } from 'express'
import { Sample } from '../../models'
import { composeApiFunc } from '../app.router'

const SamplesRouter = Router()

SamplesRouter.route('/').get(composeApiFunc(async (req: Request, res: Response) => {
  const foundSample = await Sample.find()
  return res.json(foundSample)
}))

SamplesRouter.route('/add').post(composeApiFunc(async (req: Request, res: Response) => {
  const newSample = new Sample({
    sampleName: req.body.sampleName,
    sampleValue: req.body.sampleValue,
  })

  await newSample.save()
  
  return res.json('New Sample has been created. Good work, lad!')
}))

export default SamplesRouter
