const axios = require("axios");
const HttpError = require("../models/http-errors");

const googleBooksUserId = `100125469169264869995`;
const favoritesBookshelfId = `0`;

async function getDetailsOfFavoriteBooks(idsOfFavoriteBooks) {
  // Todo: Use Promise.all to call https://www.googleapis.com/books/v1/volumes/RrmNbkTgOkcC
  //  endpoint w/ values from idsOfFavoriteBooks
  /*const response = await axios.get(
    `https://www.googleapis.com/books/v1/users/${googleBooksUserId}/bookshelves/${favoritesBookshelfId}/volumes`,
    {
      params: {
        key: process.env.GOOGLE_BOOKS_API_KEY,
        maxResults: 10,
      },
    }
  );
  const data = response.data;
  if (!data) {
    throw new HttpError("No data returned from Google Books", 500);
  } else {
    return data.items.map((favoriteBook) => favoriteBook.id);
  }*/
}

module.exports = getDetailsOfFavoriteBooks;
