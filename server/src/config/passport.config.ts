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

  passport.use('local-proxy', new LocalStrategy(async (_username: string, _password: string, _done: tDoneCallback) => {
    try {
      // Get user from Drupal.
      // Decrypt password and compare it.
      // Return user.
    } catch (_error) {
      return _done(_error)
    }
  }))

  // passport.serializeUser((_user: iUser, _done: tDoneCallback) => {
  //   _done(null, _user.id)
  // })

  // passport.deserializeUser(async (_id: any, _done: tDoneCallback) => {
  //   try {
  //     // Depending on whether the user is coming from an external API or MongoDB, activate the appropriate code set.
  //     const foundUser: iUser | null = await User.findById(_id)
  //     // TODO: Insert Drupal API endpoint for get user by id here.

  //     if (!foundUser) return _done(null, false, { message: 'Username not found when deserializing session.' })
  //     return _done(null, foundUser)
  //   } catch (_error) {
  //     return _done(_error)
  //   }
  // })
}