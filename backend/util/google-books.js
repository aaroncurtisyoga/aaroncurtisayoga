const axios = require("axios");
const HttpError = require("../models/http-errors");

const googleBooksUserId = `100125469169264869995`;
const favoritesBookshelfId = `0`;

async function getGoogleBooks() {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/users/${googleBooksUserId}/bookshelves/${favoritesBookshelfId}/volumes`,
    {
      params: {
        key: process.env.GOOGLE_BOOKS_API_KEY,
      },
    }
  );
  const data = response.data;
  if (!data) {
    throw new HttpError("No data returned from Google Books", 500);
  }
  return data;
}

module.exports = getGoogleBooks;
