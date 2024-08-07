const fs = require('fs');
const path = require('path');

const getBooks = () => {
  try {
    const booksPath = path.join(__dirname, '../books.json');
    const booksData = fs.readFileSync(booksPath, 'utf-8');
    return JSON.parse(booksData);
  } catch (error) {
    console.error('Error reading books file:', error);
    return [];
  }
};

module.exports = { getBooks };
