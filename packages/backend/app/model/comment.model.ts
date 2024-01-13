import { model, Schema, Types } from 'mongoose'

export interface IComment extends Document {
  content: string
  userId: Types.ObjectId
  comicId: Types.ObjectId
  replies: Types.ObjectId[]
  likes: number
  createdAt: Date | string
  updatedAt: Date | string
}

const CommentSchema = new Schema(
  {
    content: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    comicId: { type: Schema.Types.ObjectId, ref: 'Comic', required: true },
    replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    likes: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
)

CommentSchema.pre('save', function (next) {
  try {
    const comment = this as Omit<IComment, keyof Document>
    const id = comment.comicId
    const Comic = model('Comic')
    Comic.updateOne({ _id: id }, { $inc: { commentCount: 1 } })
    next()
  } catch (error) {
    next(error as Error)
  }
})

const Comment = model<IComment>('Comment', CommentSchema)

export default Comment
