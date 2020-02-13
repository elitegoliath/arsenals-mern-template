import { Router, Request, Response } from 'express'
import { Sample, iSample } from '../../models'
import { composeApiFunc } from '../routerUtils'

const SamplesRouter = Router()

/**
 * Get all Samples.
 */
SamplesRouter.route('/').get(composeApiFunc(async (_req: Request, _res: Response) => {
  const foundSamples: iSample[] = await Sample.find()
  return _res.json(foundSamples)
}))

/**
 * Get Sample by ID.
 */
SamplesRouter.route('/:id').get(composeApiFunc(async (_req: Request, _res: Response) => {
  const sampleId = _req.params.id
  const foundSample: iSample | null = await Sample.findById(sampleId)

  if (!foundSample) throw Error(`No Sample was found with id: ${sampleId}`)

  return _res.json(foundSample)
}))

/**
 * Delete Sample by ID.
 */
SamplesRouter.route('/:id').delete(composeApiFunc(async (_req: Request, _res: Response) => {
  const sampleId = _req.params.id
  await Sample.findByIdAndDelete(sampleId)
  return _res.json(`Sample with id ${sampleId} has been deleted.`)
}))

/**
 * Update Sample by ID.
 */
SamplesRouter.route('/update/:id').post(composeApiFunc(async (_req: Request, _res: Response) => {
  const reqBody = _req.body
  const sampleId = _req.params.id
  const foundSample = await Sample.findById(sampleId)

  if (!foundSample) throw Error(`Sample with id ${sampleId} was not found.`)

  foundSample.sampleName = reqBody.sampleName
  foundSample.sampleValue = Number(reqBody.sampleValue)

  await foundSample.save()

  return _res.json('Updated Sample has been saved.')
}))

/**
 * Add new Sample.
 */
SamplesRouter.route('/add').post(async (_req: Request, _res: Response) => {
  const newSample = new Sample({
    sampleName: _req.body.sampleName,
    sampleValue: Number(_req.body.sampleValue),
  })

  await newSample.save()

  return _res.json('New Sample has been created. Good work, lad!')
})

export default SamplesRouter
