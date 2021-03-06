const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    body: {
        type: String,
        required: [true, 'Debes introducir un comentario']
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    post: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    }

}, {
    timestamps: true
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment