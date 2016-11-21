'use strict'
let mongoose = require('mongoose')

// Create du schéma User
let userModel = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
}))

module.exports = userModel
