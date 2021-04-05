const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const InstagramFeedSchema = new Schema({
  kind: String,
  data: [
    {
      id: String,
      caption: String,
      media_url: String
    }
  ]
})

module.exports = mongoose.model("Photos", InstagramFeedSchema)