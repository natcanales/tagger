const express = require('express')
const router = express.Router()

const User = require('../models/user.model')
const Tag = require('../models/tag.model')

const mongoose = require('mongoose')

const { isLoggedIn, checkRoles } = require('./../middlewares')


// Own user profile
router.get('/current-user', isLoggedIn, (req, res) => {
    res.json({ user: req.session.currentUser })
})


// Other user profile
router.get('/:username', isLoggedIn, (req, res) => {
    const username = req.params.username

    User
        .find({ username })
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.status(404).json({ status: 404, message: "Usuario no encontrado" })
            }
        })
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor" }))
})


// Add a fav user
router.put('/add-fav-user/:username', isLoggedIn, (req, res) => {
    const username = req.params.username

    User
        .findOne({ username })
        .then(user => {
            if (user) {
                let userId = new mongoose.mongo.ObjectId(user._id)

                User
                    .findByIdAndUpdate(
                        req.session.currentUser._id,
                        { $push: { favUsers: userId } },
                        { new: true }
                    )
                    .then(user => {
                        req.session.currentUser = user
                        res.json({ message: "Añadido a favoritos" })
                    })
            } else {
                res.status(404).json({ status: 404, message: "Usuario no encontrado" })
            }
        })
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor" }))
})


// Add a fav tag
router.put('/add-fav-tag/:tagname', isLoggedIn, (req, res) => {
    const name = req.params.tagname

    Tag
        .findOne({ name })
        .then(tag => {
            if (tag) {
                let tagId = new mongoose.mongo.ObjectId(tag._id)

                User
                    .findByIdAndUpdate(
                        req.session.currentUser._id,
                        { $push: { favTags: tagId } },
                        { new: true }
                    )
                    .then(user => {
                        req.session.currentUser = user
                        res.json({ message: "Añadida a favoritos" })
                    })
            } else {
                res.status(404).json({ status: 404, message: "Usuario no encontrado" })
            }
        })
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor" }))
})


module.exports = router