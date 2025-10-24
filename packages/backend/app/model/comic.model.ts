import { Schema, model } from 'mongoose'

export interface IComic extends Document {
  name: string
  author: string
  status: string
  tags: string[]
  description: string
  chapters: number
  otherInfo: string[]
  otherNames: string[]
  viewCount: number
  favoriteCount: number
  commentCount: number
  popularity: number
  coverImage: {
    chapter: number
    page: number
  }
  createdAt: Date
  updatedAt: Date
}

const ComicSchema = new Schema({
  name: { type: String },
  otherNames: [String],
  author: String,
  chapters: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['ongoing', 'completed']
  },
  tags: [String],
  viewCount: {
    type: Number,
    default: 0
  },
  favoriteCount: {
    type: Number,
    default: 0
  },
  commentCount: {
    type: Number,
    default: 0
  },
  popularity: Number,
  coverImage: {
    chapter: {
      type: Number,
      default: 1
    },
    page: {
      type: Number,
      default: 1
    }
  },
  description: String,
  otherInfo: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

const Comic = model<IComic>('Comic', ComicSchema)

function getMillisecondsUntilTomorrow() {
  const now = new Date()
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
  return tomorrow.getTime() - now.getTime()
}

async function updatePopularity() {
  const comics = await Comic.find({})
  await Promise.all(
    comics.map(async (comic) => {
      comic.popularity =
        comic.viewCount * 0.15 + comic.favoriteCount * 0.5 + comic.commentCount * 0.35
      return comic.save()
    })
  )

  setTimeout(updatePopularity, getMillisecondsUntilTomorrow())
}

setTimeout(updatePopularity, getMillisecondsUntilTomorrow())

export default Comic
