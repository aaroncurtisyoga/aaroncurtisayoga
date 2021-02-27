const express = require('express')
const HttpError = require('../models/http-errors')

const router = express.Router()
const bookList = undefined;

router.get('/', async(req, res, next) => {
    if(bookList === undefined) {
        return next(
            new HttpError('Unable to load book-list at this time', 404)
        )
    }

    res.json({
        message: "Get to /book-list works"
    })
})

module.exports = router;