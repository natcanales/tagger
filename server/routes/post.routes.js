const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const { isLoggedIn, checkRoles } = require('./../middlewares')
const { objectId } = require('./../utils/index')

const Post = require("./../models/post.model")
const Comment = require("./../models/comment.model")


// New post creation
router.post('/new', isLoggedIn, checkRoles('USER'), (req, res) => {
    const { title, body } = req.body

    Post
        .create({ title, body, author: req.session.currentUser._id })
        .then((newPost) => res.json("Creada correctamente"))
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor", err }))
})


// List all posts
router.get('/getAllPosts', isLoggedIn, (req, res) => {

    Post
        .find()
        .sort({ "createdAt": -1 })
        .populate("tags")
        .populate("author", ["username", "_id", "displayName"])
        .then(posts => {
            res.json(posts)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'Error de servidor', err }))
})


// Get a post data
router.get("/:postId", (req, res) => {

    let postId = req.params.postId

    Post
        .findById(postId)
        .populate("tags")
        .populate("author", ["username", "displayName", "_id", "email"])
        .then(post => post ? res.json(post) : res.status(404).json({ status: 404, message: "Post no encontrado" }))
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor", err }))
})


// Edit a post
router.put('/:postId', (req, res) => {

    const postId = req.params.postId
    const { title, body } = req.body

    Post
        .findByIdAndUpdate(postId, { title, body }, { new: true })
        .then(updatedPost => res.json({ updatedPost }))
        .catch(err => res.status(500).json({ status: 500, message: "Error al editar, vuelve a intentarlo", err }))
})


// New comment creation
router.post('/:postId/new-comment', isLoggedIn, (req, res) => {
    const { body } = req.body
    let post = req.params.postId
    post = objectId(post)

    Comment
        .create({ body, author: req.session.currentUser._id, post })
        .then((newComment) => res.json("Creado correctamente"))
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor", err }))
})

// List all comments of a post
router.get('/:postId/allComments', isLoggedIn, (req, res) => {
    const post = req.params.postId

    Comment
        .find({ "post": objectId(post) })
        .sort({ "createdAt": -1 })
        .populate("author", ["username", "_id", "displayName"])
        .then(comments => {
            res.json(comments)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'Error de servidor', err }))
})

module.exports = router