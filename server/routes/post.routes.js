const express = require('express')
const router = express.Router()

const { isLoggedIn, checkRoles } = require('./../middlewares')

const Post = require("./../models/post.model")


// New post creation
router.post('/new', isLoggedIn, checkRoles('USER'), (req, res, next) => {
    const { title, body } = req.body

    Post
        .create({ title, body, author: req.session.currentUser._id })
        .then((newPost) => res.json("Creada correctamente"))
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor" }))
})


// List all posts
router.get('/getAllPosts', isLoggedIn, (req, res) => {

    Post
        .find()
        .populate("tags")
        .populate("author", ["username", "_id", "displayName"])
        .then(posts => {
            res.json(posts)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'Error de servidor' }))
})


// Get a post data
router.get("/:postId", (req, res, next) => {

    let postId = req.params.postId

    Post
        .findById(postId)
        .populate("tags")
        .populate("author", ["username", "displayName", "_id", "email"])
        .then(post => {
            if (post) {
                res.json({ post })
            } else {
                res.status(404).json({ status: 404, message: "Post no encontrado" })
            }
        })
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor" }))
})


// Edit a post
router.put('/:postId', (req, res) => {

    const postId = req.params.postId
    const { title, body } = req.body

    Post
        .findByIdAndUpdate(postId, { title, body }, { new: true })
        .then(updatedPost => res.json({ updatedPost }))
        .catch(err => res.status(500).json({ status: 500, message: "Error al editar, vuelve a intentarlo" }))
})


module.exports = router