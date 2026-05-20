// routes/bookRoutes.js
// Defines all API routes for the /books endpoint

const express = require("express");
const router = express.Router();

const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

// POST   /books       → Create a new book
// GET    /books       → Get all books
router.route("/").post(createBook).get(getAllBooks);

// GET    /books/:id   → Get a single book
// PUT    /books/:id   → Update a book
// DELETE /books/:id   → Delete a book
router.route("/:id").get(getBookById).put(updateBook).delete(deleteBook);

module.exports = router;
