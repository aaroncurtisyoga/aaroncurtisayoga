const express = require("express");
const bodyParser = require("body-parser");
const schedule = require("node-schedule");
const path = require("path")

const HttpError = require("./models/http-errors");
const instagramPhotosRoutes = require("./routes/instagram-photos-routes");
const bookListRoutes = require("./routes/book-list-routes");
const getGoogleBooks = require("./util/google-books");
const Books = require("./models/google-books-schema");
require("./db/mongoose");

const port = process.env.PORT || 8080;

// Create Express server
const app = express();

// Middleware'
app.use(bodyParser.json());

// todo: If server & ui both hosted in same place, remove cors logic
app.use((req, res, next) => {
  // Have server attach headers that allow client to access resources
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});
if(process.env.NODE_ENV === "production") {
  // Try and put the client code into the server
  app.use(express.static(path.join(__dirname, 'client/build')));

}

app.use("/api/instagram-photos", instagramPhotosRoutes);
app.use("/api/book-list", bookListRoutes);

// Handle unsupported routes
app.use((req, res, next) => {
  throw new HttpError("Could not find this route.", 404);
});

// Handle Errors thrown by middleware
app.use((error, req, res, next) => {
  // Check if a response has already been sent
  if (res.headerSent) {
    return next(error);
  }
  // No response sent yet, so send one now
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred" });
});


const job = schedule.scheduleJob("0 0 * * *", async function (fireDate) {
  console.log(
    `This googleBooks job was supposed to run at ${fireDate} but actually ran at ${new Date()}`
  );
  let googleBooks = await getGoogleBooks();
  const googleBooksForDb = new Books(googleBooks);
  await googleBooksForDb.save();
});



app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
