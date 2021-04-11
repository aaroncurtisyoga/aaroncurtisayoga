const axios = require("axios");
const HttpError = require("../models/http-errors");

async function getInstagramPhotos() {
  const response = await axios.get(
      `https://graph.instagram.com/me/media}`,
      {
        params: {
          fields: "id,caption,media_url",
          access_token: process.env.INSTAGRAM_LONG_LIVED_TOKEN,
        },
      }
  );
  const data = response.data;
  if (!data) {
    throw new HttpError("No data returned from Instagram Books", 500);
  }
  return data;
}

module.exports = getInstagramPhotos;