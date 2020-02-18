import { Record } from 'immutable'

export type tUser = {
  username?: string
  isAuthenticated?: boolean
}

const DefaultUser = Record<tUser>({
  username: 'Sign In',
  isAuthenticated: false,
})

export class User extends DefaultUser implements tUser {
  
}
