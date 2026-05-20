// models/Book.js
// Defines the schema and model for a Book in MongoDB

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
      trim: true,
    },

    author: {
      type: String,
      required: [true, "Author name is required"],
      trim: true,
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },

    isbn: {
      type: String,
      required: [true, "ISBN is required"],
      unique: true,           // No two books can have the same ISBN
      trim: true,
    },

    publishedDate: {
      type: Date,
      required: [true, "Published date is required"],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
