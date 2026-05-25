// controllers/bookController.js
// Contains the logic for each book API operation

const Book = require("../models/Book");

// ─────────────────────────────────────────────
// @desc    Create a new book
// @route   POST /books
// ─────────────────────────────────────────────
const createBook = async (req, res, next) => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    next(error); // Pass to global error handler
  }
};

// ─────────────────────────────────────────────
// @desc    Get all books (with pagination & search)
// @route   GET /books
// @query   ?page=1&limit=5&search=atomic&author=clear
// ─────────────────────────────────────────────
const getAllBooks = async (req, res, next) => {
  try {
    // ── Search Filter ──────────────────────────────────────
    const query = {};

    if (req.query.search) {
      // Search by title OR author (case-insensitive)
      query.$or = [
        { title:  { $regex: req.query.search,  $options: "i" } },
        { author: { $regex: req.query.search, $options: "i" } },
      ];
    }

    if (req.query.author) {
      query.author = { $regex: req.query.author, $options: "i" };
    }

    // ── Pagination ─────────────────────────────────────────
    const page  = parseInt(req.query.page)  || 1; // Default: page 1
    const limit = parseInt(req.query.limit) || 10; // Default: 10 per page
    const skip  = (page - 1) * limit;

    const total = await Book.countDocuments(query);
    const books = await Book.find(query).skip(skip).limit(limit);

    res.status(200).json({
      success: true,
      total,                           // Total matching books in DB
      page,                            // Current page
      pages: Math.ceil(total / limit), // Total number of pages
      count: books.length,             // Books returned this page
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

// ─────────────────────────────────────────────
// @desc    Get a single book by ID
// @route   GET /books/:id
// ─────────────────────────────────────────────
const getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({ success: true, data: book });
  } catch (error) {
    next(error);
  }
};

// ─────────────────────────────────────────────
// @desc    Update a book by ID
// @route   PUT /books/:id
// ─────────────────────────────────────────────
const updateBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,           // Return the updated document
      runValidators: true, // Re-run schema validations on update
    });

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

// ─────────────────────────────────────────────
// @desc    Delete a book by ID
// @route   DELETE /books/:id
// ─────────────────────────────────────────────
const deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
