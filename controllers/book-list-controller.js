const Books = require("../models/google-books-schema");
const HttpError = require("../models/http-errors");

const getBookList = async (req, res, next) => {
  let googleBooks;

  try {
    googleBooks = await Books.find();
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
