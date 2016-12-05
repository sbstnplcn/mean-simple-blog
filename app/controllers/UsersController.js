'use strict';
let Controller = require('./Controller')
const USER = require('../models/user')
const ARTICLE = require('../models/article')

class UsersController extends Controller {

    constructor() {
        super(USER)
    }

    findById(req,res, next){
      this.model.findById(req.params.id).populate({
        path: 'Article',
        populate:({path: 'author', populate:{ path: 'Article'}})
        }).exec((err, document)=>{
        if (err) next(err)
        else res.json(document)
      })
    }

}

module.exports = UsersController
