const mongoose = require("mongoose")
const Schema = mongoose.Schema

const tagSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Debes introducir un nombre de tag']
    },

    description: String

}, {
    timestamps: true
})

const Tag = mongoose.model("Tag", tagSchema)

module.exports = Tag