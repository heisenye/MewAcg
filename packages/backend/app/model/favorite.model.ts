import { Schema, Types, model } from 'mongoose'

export interface IFavorite extends Document {
  userId: Types.ObjectId
  comicId: Types.ObjectId
}

const FavoriteSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    comicId: { type: Schema.Types.ObjectId, ref: 'Comic', required: true }
  },
  { timestamps: { createdAt: true, updatedAt: false } }
)

FavoriteSchema.pre('save', async function (next) {
  try {
    const favorite = this as Omit<IFavorite, keyof Document>
    const id = favorite.comicId
    const Comic = model('Comic')
    await Comic.updateOne({ _id: id }, { $inc: { favoriteCount: 1 } })
    next()
  } catch (error) {
    next(error as Error)
  }
})

const Favorite = model<IFavorite>('Favorite', FavoriteSchema)

export default Favorite
