import { Schema, Types, model } from 'mongoose'
export interface IView extends Document {
  userId: Types.ObjectId
  comicId: Types.ObjectId
}

const ViewSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  comicId: { type: Schema.Types.ObjectId, ref: 'Comic', required: true },
  date: { type: Date, default: () => new Date().toISOString().split('T')[0] }
})

ViewSchema.index({ userId: 1, comicId: 1, date: 1 }, { unique: true })

ViewSchema.pre('save', async function (next) {
  try {
    const view = this
    const id = view.comicId
    const Comic = model('Comic')
    await Comic.updateOne({ _id: id }, { $inc: { viewCount: 1 } })
  } catch (error) {
    next(error as Error)
  }
})

const View = model<IView>('View', ViewSchema)

export default View
