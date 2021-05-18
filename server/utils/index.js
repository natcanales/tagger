const mongoose = require('mongoose')

module.exports = {
    cleanText: text => text.trim(),
    capitalizeText: text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase(),
    objectId: id => mongoose.mongo.ObjectId(id)
}