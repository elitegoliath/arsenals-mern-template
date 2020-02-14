import * as passport from 'passport'
import { Strategy as LocalStrategy, IVerifyOptions } from 'passport-local'
import { User, iUser } from 'src/models'

type tDoneCallback = (error: any, user?: any, options?: IVerifyOptions) => void

export default () => {
  passport.use('local', new LocalStrategy(async (_username: string, _password: string, _done: tDoneCallback) => {
    try {
      const foundUser: iUser | null = await User.findOne({ username: _username })
      if (!foundUser) return _done(null, false, { message: 'Username not found.' })
      if (!foundUser.verifyPassword(_password)) return _done(null, false, { message: 'Incorrect password.' })
      return _done(null, foundUser)
    } catch (_error) {
      return _done(_error)
    }
  }))
}