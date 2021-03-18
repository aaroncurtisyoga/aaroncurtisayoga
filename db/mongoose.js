const mongoose = require("mongoose");

mongoose
  .createConnection(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connection to Mongoose successful`);
  })
  .catch((e) => {
    console.log(`Connection to Mongoose not successful`);
    console.log(e);
  });
