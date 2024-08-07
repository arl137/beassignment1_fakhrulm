const { getBooks } = require('../models/books');

const getAllBooks = (req, res) => {
  const books = getBooks();
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(books, null, 2));
};

const getBookById = (req, res) => {
  const books = getBooks();
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(book, null, 2));
};

const renderBooksPage = (req, res) => {
  const books = getBooks();
  res.render('books', { books });
};

module.exports = {
  getAllBooks,
  getBookById,
  renderBooksPage
};
