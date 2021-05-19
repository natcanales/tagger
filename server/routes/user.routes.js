const express = require('express')
const router = express.Router()

const User = require('../models/user.model')
const Tag = require('../models/tag.model')

const mongoose = require('mongoose')

const { isLoggedIn } = require('./../middlewares')


// Own user profile
router.get('/current-user', isLoggedIn, (req, res) => {
    res.json(req.session.currentUser)
})


// Other user profile
router.get('/:username', isLoggedIn, (req, res) => {
    const username = req.params.username

    User
        .find({ username })
        .then(user => user ? res.json(user) : res.status(404).json({ status: 404, message: "Usuario no encontrado" }))
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor", err }))
})


// Add a fav user
router.put('/add-fav-user/:username', isLoggedIn, (req, res) => {
    const username = req.params.username

    User
        .findOne({ username })
        .then(user => {
            if (user) {
                let userId = new objectId(user._id)

                return User
                    .findByIdAndUpdate(
                        req.session.currentUser._id,
                        { $push: { favUsers: userId } },
                        { new: true }
                    )
            } else {
                res.status(404).json({ status: 404, message: "Usuario no encontrado" })
            }
        })
        .then(user => {
            req.session.currentUser = user
            res.json({ message: "Añadido a favoritos" })
        })
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor", err }))
})


// Add a fav tag
router.put('/add-fav-tag/:tagname', isLoggedIn, (req, res) => {
    const name = req.params.tagname

    Tag
        .findOne({ name })
        .then(tag => {
            if (tag) {
                let tagId = new objectId(tag._id)

                return User
                    .findByIdAndUpdate(
                        req.session.currentUser._id,
                        { $push: { favTags: tagId } },
                        { new: true }
                    )

            } else {
                res.status(404).json({ status: 404, message: "Usuario no encontrado" })
            }
        })
        .then(user => {
            req.session.currentUser = user
            res.json({ message: "Añadida a favoritos" })
        })
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor", err }))
})


module.exports = router