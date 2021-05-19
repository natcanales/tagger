const express = require('express')
const router = express.Router()

const { isLoggedIn, checkRoles } = require('./../middlewares')

const User = require("./../models/user.model")
const Post = require("./../models/post.model")
const Tag = require("./../models/tag.model")


// New tag creation
router.post('/new-tag', isLoggedIn, checkRoles('ADMIN'), (req, res) => {
    const { name, description } = req.body

    Tag
        .create({ name, description })
        .then((newTag) => res.json("Creada correctamente"))
        .catch(err => res.status(500).json({ status: 500, message: "Tag existente" }, err))
})


// User list
router.get('/users-list', isLoggedIn, (req, res) => {

    User
        .find({ isActive: true, role: "USER" })
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor" }, err))
})


// Get a tag data
router.get("/edit-tag/:tagId", (req, res) => {

    let tagId = req.params.tagId

    Tag
        .findById(tagId)
        .then(tag => tag ? res.json({ tag }) : res.status(404).json({ status: 404, message: "Tag no encontrada" }))
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor" }, err))
})


// Edit a tag
router.put('/edit-tag/:tagId', (req, res) => {

    const tagId = req.params.tagId
    const { name, description } = req.body

    Tag
        .findByIdAndUpdate(tagId, { name, description }, { new: true })
        .then(updatedTag => res.json({ updatedTag }))
        .catch(err => res.status(500).json({ status: 500, message: "Error al editar, vuelve a intentarlo" }, err))
})


// Delete a user
router.delete("/delete-user/:userId", (req, res) => {

    let userId = req.params.userId

    User
        .findByIdAndUpdate(userId, { isActive: false })
        .then(() => res.json({ message: "User eliminado correctamente" }))
        .catch(err => res.status(500).json({ status: 500, message: "Error eliminando este user, vuelve a intentarlo" }, err))

})


// Delete a post
router.delete("/delete-post/:postId", (req, res) => {

    let postId = req.params.postId

    Post
        .findByIdAndDelete(postId)
        .then(() => res.json({ message: "Post eliminado correctamente" }))
        .catch(err => res.status(500).json({ status: 500, message: "Error eliminando este post, vuelve a intentarlo" }, err))

})


// Delete a tag
router.delete("/delete-tag/:tagId", (req, res) => {

    let tagId = req.params.tagId

    Tag
        .findByIdAndDelete(tagId)
        .then(() => res.json({ message: "Tag eliminada correctamente" }))
        .catch(err => res.status(500).json({ status: 500, message: "Error eliminando esta tag, vuelve a intentarlo" }, err))

})


module.exports = router