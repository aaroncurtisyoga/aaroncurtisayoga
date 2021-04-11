const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const InstagramFeedSchema = new Schema({
  kind: String,
  items: [
    {
      id: String,
      caption: String,
      media_url: String
    }
  ],
  totalItems: ""
})

module.exports = mongoose.model("Photos", InstagramFeedSchema)