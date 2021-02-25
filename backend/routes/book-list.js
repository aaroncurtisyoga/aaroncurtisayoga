const express = require('express')

const router = express.Router()

router.get('/book-list', async(req, res, next) => {
    res.json({
        message: "Get to /book-list works"
    })
})

module.exports = router;