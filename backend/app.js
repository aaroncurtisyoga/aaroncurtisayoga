const express = require("express");
require("./db/mongoose");
const bodyParser = require("body-parser");

const HttpError = require("./models/http-errors");
const instagramPhotosRoutes = require("./routes/instagram-photos-routes");
const bookListRoutes = require("./routes/book-list-routes");

const port = process.env.PORT || 5000;

// Create an Express server
const app = express();

/*----------*/
/*Middleware*/
/*----------*/
app.use(bodyParser.json());
app.use("/api/instagram-photos", instagramPhotosRoutes);
app.use("/api/book-list", bookListRoutes);
// Handle unsupported routes
app.use((req, res, next) => {
  throw new HttpError("Could not find this route.", 404);
});
// Error Handling to Execute if any middleware in front has an error
app.use((error, req, res, next) => {
  // Check if a response has already been sent
  if (res.headerSent) {
    return next(error);
  }
  // No response sent yet, so send one now
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred" });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
