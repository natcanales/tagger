const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Debes introducir un título de post']
    },

    body: String,

    tags: [{
        type: Schema.Types.ObjectId,
        ref: "Tag"
    }]

}, {
    timestamps: true
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post