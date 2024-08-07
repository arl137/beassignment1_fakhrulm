const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  renderBooksPage
} = require('../controllers/booksController');

router.get('/', getAllBooks);
router.get('/:id', getBookById);

module.exports = router;
