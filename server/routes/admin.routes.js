const express = require('express')
const router = express.Router()

const { isLoggedIn, checkRoles } = require('./../middlewares')

const User = require("./../models/user.model")
const Post = require("./../models/post.model")
const Tag = require("./../models/tag.model")


// New tag creation
router.post('/new-tag', isLoggedIn, checkRoles('ADMIN'), (req, res, next) => {
    const { name, description } = req.body

    Tag
        .create({ name, description })
        .then((newTag) => res.json("Creada correctamente"))
        .catch(err => res.status(500).json({ status: 500, message: "Tag existente" }))
})


// User list
router.get('/users-list', isLoggedIn, (req, res, next) => {

    User
        .find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor" }))
})


// Tags list
router.get('/tag-list', (req, res, next) => {

    Tag
        .find()
        .then(allTags => res.json({ allTags }))
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor" }))
})


// Get a tag data
router.get("/edit-tag/:tagId", (req, res, next) => {

    let tagId = req.params.tagId

    Tag
        .findById(tagId)
        .then(tag => {
            if (tag) {
                res.json({ tag })
            } else {
                res.status(404).json({ status: 404, message: "Tag no encontrada" })
            }
        })
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor" }))
})


// Edit a tag
router.put('/edit-tag/:tagId', (req, res) => {

    const tagId = req.params.tagId
    const { name, description } = req.body

    Tag
        .findByIdAndUpdate(tagId, { name, description }, { new: true })
        .then(updatedTag => res.json({ updatedTag }))
        .catch(err => res.status(500).json({ status: 500, message: "Error al editar, vuelve a intentarlo" }))
})


// Delete a user
router.delete("/delete-user/:userId", (req, res, next) => {

    let userId = req.params.userId

    User
        .findByIdAndUpdate(userId, { isActive: false })
        .then(() => res.json({ message: "User eliminado correctamente" }))
        .catch(err => res.status(500).json({ status: 500, message: "Error eliminando este user, vuelve a intentarlo" }))

})


// Delete a post
router.delete("/delete-post/:postId", (req, res, next) => {

    let postId = req.params.postId

    Post
        .findByIdAndDelete(postId)
        .then(() => res.json({ message: "Post eliminado correctamente" }))
        .catch(err => res.status(500).json({ status: 500, message: "Error eliminando este post, vuelve a intentarlo" }))

})


// Delete a tag
router.delete("/delete-tag/:tagId", (req, res, next) => {

    let tagId = req.params.tagId

    Tag
        .findByIdAndDelete(tagId)
        .then(() => res.json({ message: "Tag eliminada correctamente" }))
        .catch(err => res.status(500).json({ status: 500, message: "Error eliminando esta tag, vuelve a intentarlo" }))

})


module.exports = router