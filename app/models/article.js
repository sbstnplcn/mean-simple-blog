'use strict'
let mongoose = require('mongoose')

// Create du schéma User
let articleModel = mongoose.model('Article', new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    author: {
        type: String,
        default: 'Redactor'
    },
    PublishedAt: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String
    }
}, {
    timestamps: true
}))

module.exports = articleModel
