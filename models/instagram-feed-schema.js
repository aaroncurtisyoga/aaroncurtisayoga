const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const InstagramFeedSchema = new Schema({
  kind: String,
  items: [],
  totalItems: Number
})

module.exports = mongoose.model("Photos", InstagramFeedSchema)