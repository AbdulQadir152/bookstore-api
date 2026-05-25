// middleware/errorHandler.js
// Global error handling middleware — catches any unhandled errors

const errorHandler = (err, req, res, next) => {
  console.error(`❌ Error: ${err.message}`);

  // Mongoose bad ObjectId (e.g. /books/abc when it should be a valid MongoDB ID)
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid book ID format",
    });
  }

  // Mongoose duplicate key (e.g. duplicate ISBN)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(400).json({
      success: false,
      message: `A book with this ${field} already exists`,
    });
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      message: messages.join(", "),
    });
  }

  // Default server error
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
