const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());

// impor routes
const booksRouter = require('./routes/books');
const { renderBooksPage } = require('./controllers/booksController');

// routes endpoint /book
app.use('/books', booksRouter);

// Endpoint EJS
app.get('/ejs/books', renderBooksPage);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
