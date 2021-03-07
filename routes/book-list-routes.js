const express = require('express')
const bookListController = require('../controllers/book-list-controller')

const router = express.Router()

router.get('/', bookListController.getBookList)

module.exports = router;