// app.js
// Entry point for the Bookstore REST API

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// ── Load environment variables from .env ──────────────────
dotenv.config();

// ── Connect to MongoDB ─────────────────────────────────────
connectDB();

// ── Initialize Express app ─────────────────────────────────
const app = express();

// ── Middleware ─────────────────────────────────────────────
app.use(express.json()); // Parse incoming JSON request bodies

// ── Routes ─────────────────────────────────────────────────
const bookRoutes = require("./routes/bookRoutes");
app.use("/books", bookRoutes);

// ── Root route (health check) ──────────────────────────────
app.get("/", (req, res) => {
  res.json({
    message: "📚 Welcome to the Bookstore API!",
    status: "Server is running",
    endpoints: {
      "GET    /books":        "Get all books",
      "POST   /books":        "Create a new book",
      "GET    /books/:id":    "Get a single book by ID",
      "PUT    /books/:id":    "Update a book by ID",
      "DELETE /books/:id":    "Delete a book by ID",
    },
  });
});

// ── 404 Handler ────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

// ── Start server ───────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
