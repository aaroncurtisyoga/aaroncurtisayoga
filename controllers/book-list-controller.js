const HttpError = require("../models/http-errors");
const getGoogleBooks = require("../util/google-books");

const getBookList = async (req, res, next) => {
  let googleBooks;

  try {
    googleBooks = await getGoogleBooks();
  } catch (e) {
    console.log(e);
    const error = new HttpError(e, 500);
    return next(error);
  }

  res.json({
    ...googleBooks,
  });
};

exports.getBookList = getBookList;
