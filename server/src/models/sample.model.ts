import { Document, Schema, Model, model } from 'mongoose'

export interface iSample extends Document {
  sampleName?: string,
  sampleValue?: number,
}

export const sampleSchema: Schema = new Schema({
  sampleName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  sampleValue: { type: Number, trim: true }
}, { timestamps: true })

export const Sample: Model<iSample> = model<iSample>('Sample', sampleSchema)
