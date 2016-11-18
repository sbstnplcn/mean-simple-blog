'use strict'
let mongoose = require('mongoose')

// Create du schéma User
let userModel = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    email: {
      type: String,
      unique: true
    }
}, {
    timestamps: true
}))

module.exports = userModel
