const express = require('express')

const router = express.Router()
const HttpError = require('../models/http-errors')
const instagramPhotos = undefined;

router.get('/', async(req, res, next) => {
    // Throw error if req to db fails
    if(instagramPhotos === undefined) {
        return next(
            new HttpError('Unable to load instagram photos', 404)
        )
    }
    res.json({
        message: "Get to /instagram-photos works"
    })

})

module.exports = router;