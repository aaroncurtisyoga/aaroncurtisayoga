const HttpError = require('../models/http-errors')

const getInstagramPhotos = async (req, res, next) => {
    const instagramPhotos = undefined;
    // Throw error if req to db fails
    if(instagramPhotos === undefined) {
        return next(
            new HttpError('Unable to load instagram photos', 404)
        )
    }
    res.json({
        message: "Get to /instagram-photos works"
    })
}

exports.getInstagramPhotos = getInstagramPhotos;