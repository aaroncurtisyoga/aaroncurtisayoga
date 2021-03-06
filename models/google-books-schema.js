const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoogleBooksSchema = new Schema({
  kind: String,
  totalItems: String,
  items: [
    {
      kind: String,
      id: String,
      etag: String,
      selfLink: String,
      volumeInfo: {
        title: String,
        authors: Array,
        publishedDate: String,
        industryIdentifiers: Array,
        readingModes: Object,
        printType: String,
        maturityRating: String,
        allowAnonLogging: Boolean,
        contentVersion: String,
        panelizationSummary: Object,
        previewLink: String,
        infoLink: String,
        canonicalVolumeLink: String,
      },
      saleInfo: Object,
      accessInfo: Object,
    },
  ],
});

module.exports = mongoose.model("Books", GoogleBooksSchema);
