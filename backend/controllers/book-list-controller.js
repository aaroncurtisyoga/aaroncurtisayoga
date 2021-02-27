const HttpError = require('../models/http-errors')

const getBookList = async (req, res, next) => {
    const bookList = undefined;
    if(bookList === undefined) {
        return next(
            new HttpError('Unable to load book-list at this time', 404)
        )
    }

    res.json({
        message: "Get to /book-list works"
    })
}

exports.getBookList = getBookList;