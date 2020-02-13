import { Request, Response } from 'express'

/**
 * Composer to eliminate the need for redundant error catching inside of each
 * endpoint.
 * 
 * @param _callback 
 */
export const composeApiFunc = (_callback: any) => (_req: Request, _res: Response) => {
  _callback(_req, _res)
    .catch((_error: Error) => {
      _res.status(400).json(_error.message)
    })
}
