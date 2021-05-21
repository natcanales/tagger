const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    displayName: {
        type: String,
        required: [true, 'Debes introducir tu nombre']
    },

    username: {
        type: String,
        unique: true,
        required: [true, 'Debes introducir un nombre de usuario']
    },

    image: {
        type: String,
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'Debes indicar un mail']
    },

    password: {
        type: String,
        required: [true, 'Debes introducir una contraseña']
    },

    birthdate: {
        type: Date,
        required: [true, 'Debes introducir tu cumpleaños']
    },

    favPosts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }],

    favTags: [{
        type: Schema.Types.ObjectId,
        ref: "Tag"
    }],

    favUsers: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],

    role: {
        type: String,
        enum: ["ADMIN", "USER"],
        default: "USER"
    },

    isActive: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User