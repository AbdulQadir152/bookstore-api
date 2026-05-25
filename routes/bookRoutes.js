// routes/bookRoutes.js
// Defines all API routes for the /books endpoint

const express = require("express");
const router  = express.Router();

const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const {
  validateCreateBook,
  validateUpdateBook,
} = require("../middleware/validate");

// POST   /books  → validate input first, then create
// GET    /books  → supports ?page=1&limit=5&search=title&author=name
router.route("/")
  .post(validateCreateBook, createBook)
  .get(getAllBooks);

// GET    /books/:id  → get one
// PUT    /books/:id  → validate input first, then update
// DELETE /books/:id  → delete
router.route("/:id")
  .get(getBookById)
  .put(validateUpdateBook, updateBook)
  .delete(deleteBook);

module.exports = router;
