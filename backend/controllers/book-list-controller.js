const getGoogleBooks = require("../util/google-books");

const getBookList = async (req, res, next) => {
  let googleBooks;
  try {
    googleBooks = await getGoogleBooks();
  } catch (error) {
    return next(error);
  }

  res.json({
    ...googleBooks,
  });
};

exports.getBookList = getBookList;
