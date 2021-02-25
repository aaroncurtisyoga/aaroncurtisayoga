const express = require('express')

const app = express();
const port = 5000;
const instagramPhotosRoutes = require('./routes/instagram-photos');
const bookListRoutes = require('./routes/book-list');

app.use(instagramPhotosRoutes)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})