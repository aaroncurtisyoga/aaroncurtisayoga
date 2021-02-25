const express = require('express')

const router = express.Router()

router.get('/instagram-photos', async(req, res, next) => {
    res.json({
        message: "Get to /instagram-photos works"
    })
})

module.exports = router;