// middleware/validate.js
// Reusable validation middleware using express-validator

const { body, validationResult } = require("express-validator");

// ── Runs after validation rules & returns errors if any ───
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      })),
    });
  }
  next();
};

// ── Validation rules for creating a book (all fields required) ──
const validateCreateBook = [
  body("title")
    .trim()
    .notEmpty().withMessage("Title is required")
    .isLength({ min: 1, max: 200 }).withMessage("Title must be between 1 and 200 characters"),

  body("author")
    .trim()
    .notEmpty().withMessage("Author name is required")
    .isLength({ min: 1, max: 100 }).withMessage("Author must be between 1 and 100 characters"),

  body("price")
    .notEmpty().withMessage("Price is required")
    .isFloat({ min: 0 }).withMessage("Price must be a positive number"),

  body("isbn")
    .trim()
    .notEmpty().withMessage("ISBN is required")
    .isLength({ min: 10, max: 13 }).withMessage("ISBN must be between 10 and 13 characters"),

  body("publishedDate")
    .notEmpty().withMessage("Published date is required")
    .isISO8601().withMessage("Published date must be a valid date (YYYY-MM-DD)"),

  handleValidationErrors,
];

// ── Validation rules for updating a book (all fields optional) ──
const validateUpdateBook = [
  body("title")
    .optional()
    .trim()
    .isLength({ min: 1, max: 200 }).withMessage("Title must be between 1 and 200 characters"),

  body("author")
    .optional()
    .trim()
    .isLength({ min: 1, max: 100 }).withMessage("Author must be between 1 and 100 characters"),

  body("price")
    .optional()
    .isFloat({ min: 0 }).withMessage("Price must be a positive number"),

  body("isbn")
    .optional()
    .trim()
    .isLength({ min: 10, max: 13 }).withMessage("ISBN must be between 10 and 13 characters"),

  body("publishedDate")
    .optional()
    .isISO8601().withMessage("Published date must be a valid date (YYYY-MM-DD)"),

  handleValidationErrors,
];

module.exports = { validateCreateBook, validateUpdateBook };
