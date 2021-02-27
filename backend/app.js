const express = require('express')

const app = express();
const port = 5000;
const instagramPhotosRoutes = require('./routes/instagram-photos-routes');
const bookListRoutes = require('./routes/book-list-routes');

app.use('/api/instagram-photos', instagramPhotosRoutes)
app.use('/api/book-list', bookListRoutes)

/* Special, Error Handling, Middleware. Execute if any middleware in front
 has an error  */
app.use((error, req, res, next) => {
    // Check if a response has already been sent
    if(res.headerSent) {
        return next(error)
    }
    // No response sent yet, so send one now
    res.status(error.code || 500)
    res.json({ message:error.message || 'An unknown error occured' })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})