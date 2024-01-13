"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CommentSchema = new mongoose_1.Schema({
    content: { type: String, required: true },
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    comicId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Comic', required: true },
    replies: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Comment' }],
    likes: { type: Number, default: 0 }
}, {
    timestamps: true
});
CommentSchema.pre('save', function (next) {
    try {
        var comment = this;
        var id = comment.comicId;
        var Comic = (0, mongoose_1.model)('Comic');
        Comic.updateOne({ _id: id }, { $inc: { commentCount: 1 } });
        next();
    }
    catch (error) {
        next(error);
    }
});
var Comment = (0, mongoose_1.model)('Comment', CommentSchema);
exports.default = Comment;
