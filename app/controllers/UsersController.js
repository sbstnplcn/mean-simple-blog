'use strict';
let Controller = require('./Controller')
const USER = require('../models/user')
const ARTICLE = require('../models/article')

class UsersController extends Controller {

    constructor() {
        super(USER)
    }

}

module.exports = UsersController
