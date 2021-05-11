const mongoose = require('mongoose')

const User = require("./../models/user.model")
const Post = require("./../models/post.model")
const Tag = require("./../models/tag.model")
const Comment = require("./../models/comment.model")

const users = require("./../users")

const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/express-boilerplate`

const INITIAL_RESET = false

const promise = mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

if (INITIAL_RESET) {
    promise
        .then(details => {
            const { name, client } = details.connections[0]
            console.log(`Connected to database "${name}" (URL: ${client.s.url})`)
            return details.connection.dropDatabase()
        })
        .then(() => {
            return User.syncIndexes()
        })
        .then(() => {
            return Post.syncIndexes()
        })
        .then(() => {
            return Tag.syncIndexes()
        })
        .then(() => {
            return Comment.syncIndexes()
        })
        .then(() => User.insertMany(users))

        .catch(err => console.error('Error connecting to Mongo', err))

} else {
    promise
        .then(details => {
            const { name, client } = details.connections[0]
            console.log(`Connected to database "${name}" (URL: ${client.s.url})`)
        })

        .catch(err => console.error('Error connecting to Mongo', err))
}