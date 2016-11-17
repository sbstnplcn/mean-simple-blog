'use strict'

let ArticlesController = require('../controllers/ArticlesController')

module.exports = (app) => {

    let ctrl = new ArticlesController()

    // Création des différentes "routes" (API) que le serveur met à disposition
    app.get('/articles', (req, res, next) => {
        return ctrl.find(req, res, next)
    })

    app.get('/articles/:id', (req, res, next) => {
        return ctrl.findById(req, res, next)
    })

    app.post('/articles', (req, res, next) => {
        return ctrl.create(req, res, next)
    })

    app.put('/articles/:id', (req, res, next) => {
        return ctrl.update(req, res, next)
    })

    app.delete('/articles/:id', (req, res, next) => {
        return ctrl.delete(req, res, next)
    })
}
