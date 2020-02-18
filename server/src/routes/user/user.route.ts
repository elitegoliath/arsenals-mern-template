import { Router, Request, Response } from 'express'
import { composeApiFunc } from '../routerUtils'
import { authenticate } from 'passport'

const UserRouter = Router()

UserRouter.route('/proxy/login').post(authenticate('local-proxy'), composeApiFunc(async (_req: Request, _res: Response) => {
  console.log('Drupal User Login Success!!')
  // Redirect...
}))

UserRouter.route('/login').post(authenticate('local'), composeApiFunc(async (_req: Request, _res: Response) => {
  // Redirect
}))

UserRouter.route('/proxy/register').post(composeApiFunc(async (_req: Request, _res: Response) => {
  // Encrypt password.
  // Register
  // Log in
  // Redirect
}))

UserRouter.route('/register').post(composeApiFunc(async (_req: Request, _res: Response) => {
  // Encrypt password.
  // Register
  // Log in
  // Redirect
}))

export default UserRouter
