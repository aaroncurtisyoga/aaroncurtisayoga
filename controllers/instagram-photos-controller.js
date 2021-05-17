const Photos = require("../models/instagram-feed-schema");
const HttpError = require("../models/http-errors");

const getInstagramPhotos = async (req, res, next) => {
  let photos;

  try {
    photos = await Photos.find();
  } catch (e) {
    console.log(e);
    const error = new HttpError(e, 500);
    return next(error);
  }

  res.json({
    ...photos,
  });
};

exports.getInstagramPhotos = getInstagramPhotos;
