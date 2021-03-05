const express = require('express')
const instagramPhotosController = require('../controllers/instagram-photos-controller')
const router = express.Router()

router.get('/', instagramPhotosController.getInstagramPhotos)

module.exports = router;