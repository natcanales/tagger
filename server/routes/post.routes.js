const express = require('express')
const router = express.Router()

const { isLoggedIn, checkRoles } = require('./../middlewares')

const Post = require("./../models/post.model")


// New post creation
router.post('/new', isLoggedIn, checkRoles('USER'), (req, res, next) => {
    const { title, body } = req.body

    Post
        .create({ title, body })
        .then((newPost) => res.json("Creada correctamente"))
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor" }))
})


// Get a post data
router.get("/edit/:postId", (req, res, next) => {

    let postId = req.params.postId

    Post
        .findById(postId)
        .then(post => res.json({ post }))
        .catch(err => res.status(500).json({ status: 500, message: "Post no encontrado" }))


})


// Edit a post
router.put('/edit/:postId', (req, res) => {

    const postId = req.params.postId
    const { title, body } = req.body

    Post
        .findByIdAndUpdate(postId, { title, body }, { new: true })
        .then(updatedPost => res.json({ updatedPost }))
        .catch(err => res.status(500).json({ status: 500, message: "Error al editar, vuelve a intentarlo" }))
})


module.exports = router