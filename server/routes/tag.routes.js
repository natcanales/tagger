const express = require('express')
const { objectId } = require('../utils')
const router = express.Router()

const { isLoggedIn, checkRoles } = require('./../middlewares')
const Tag = require("./../models/tag.model")


// Tags list
router.get('/tag-list', isLoggedIn, (req, res) => {

    Tag
        .find()
        .then(allTags => res.json(allTags))
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor", err }))
})


// Tags list (except favorites)
router.get('/available-tag-list', isLoggedIn, checkRoles('USER'), (req, res) => {

    const user = req.session.currentUser
    let objectIds = []

    user.favTags.forEach(elm => {
        objectIds.push(objectId(elm))
    })

    Tag
        .find({ _id: { $nin: objectIds } })
        .then(allTags => res.json(allTags))
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor", err }))
})


module.exports = router