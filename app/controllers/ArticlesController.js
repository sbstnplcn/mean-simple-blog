'use strict';
let Controller = require('./Controller')
const ARTICLE = require('../models/article')

class ArticlesController extends Controller {

    constructor() {
        super(ARTICLE)
    }

}

module.exports = ArticlesController
