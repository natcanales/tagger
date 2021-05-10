const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Debes introducir un título de post']
    },

    body: {
        type: String,
        required: [true, 'Debes introducir contenido']
    },

    tags: [{
        type: Schema.Types.ObjectId,
        ref: "Tag"
    }],

    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

}, {
    timestamps: true
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post