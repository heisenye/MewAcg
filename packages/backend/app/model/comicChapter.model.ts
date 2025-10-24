import { Schema, model, Document, Error, Types } from 'mongoose'
import Comic from './comic.model'
export interface IComicChapter extends Document {
  comicId: Types.ObjectId
  chapter: number
  pages: number
}

const comicChapterSchema = new Schema({
  comicId: {
    ref: 'Comic',
    type: Schema.Types.ObjectId
  },
  chapter: Number,
  pages: Number
})

comicChapterSchema.pre('save', async function (next) {
  try {
    const comicChapter = this
    console.log(comicChapter)
    await Comic.updateOne(
      { _id: comicChapter.comicId },
      { $inc: { chapters: 1 }, $set: { updatedAt: new Date() } }
    ).exec()
    next()
  } catch (error) {
    next(error as Error)
  }
})

const ComicChapter = model<IComicChapter>('ComicChapter', comicChapterSchema)

export default ComicChapter
