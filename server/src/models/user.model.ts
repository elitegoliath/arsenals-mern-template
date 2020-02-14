import { Document, Schema, Model, model } from 'mongoose'
import { hashSync, genSaltSync, compareSync } from 'bcrypt'

export interface iUser extends Document {
  username?: string,
  password?: string,
  saltPassword: (_password: string) => string,
  verifyPassword: (_password: string) => boolean,
}

export const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  }
}, { timestamps: true })

// Must declare methods using non-ES6 arrow functions due to how they
// break the binding to 'this'.
// https://mongoosejs.com/docs/guide.html#methods
userSchema.methods = {
  saltPassword: function(_password: string) {
    return hashSync(_password, genSaltSync())
  },
  verifyPassword: function(_password: string) {
    return compareSync(_password, this.password)
  },
}

export const User: Model<iUser> = model<iUser>('User', userSchema)
