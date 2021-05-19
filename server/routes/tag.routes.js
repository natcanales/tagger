const express = require('express')
const router = express.Router()

const Tag = require("./../models/tag.model")


// Tags list
router.get('/tag-list', (req, res) => {

    Tag
        .find()
        .then(allTags => res.json({ allTags }))
        .catch(err => res.status(500).json({ status: 500, message: "Error de servidor", err }))
})


module.exports = router