<h1 align="center">📚 Bookstore REST API</h1>

<p align="center">
A RESTful API for a Bookstore built with <b>Node.js</b>, <b>Express.js</b>, and <b>MongoDB</b>.<br>
Supports full CRUD operations, input validation, pagination, and search filtering.
</p>

<hr>

<h2>🛠️ Technologies Used</h2>

<table>
  <tr>
    <th>Technology</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td>Node.js</td>
    <td>JavaScript runtime environment</td>
  </tr>
  <tr>
    <td>Express.js</td>
    <td>Web framework for building the API</td>
  </tr>
  <tr>
    <td>MongoDB</td>
    <td>NoSQL database for storing books</td>
  </tr>
  <tr>
    <td>Mongoose</td>
    <td>ODM library for MongoDB</td>
  </tr>
  <tr>
    <td>express-validator</td>
    <td>Input validation & sanitization</td>
  </tr>
  <tr>
    <td>dotenv</td>
    <td>Loading environment variables</td>
  </tr>
  <tr>
    <td>nodemon</td>
    <td>Auto-restart server (development only)</td>
  </tr>
</table>

<hr>

<h2>📁 Project Structure</h2>

<pre>
bookstore-api/
├── app.js                      # Entry point
├── config/
│   └── db.js                   # MongoDB connection
├── models/
│   └── Book.js                 # Book schema & model
├── controllers/
│   └── bookController.js       # CRUD logic + pagination + search
├── routes/
│   └── bookRoutes.js           # Route definitions
├── middleware/
│   ├── validate.js             # Input validation rules
│   └── errorHandler.js         # Global error handler
├── .env                        # Environment variables (not committed)
├── .env.example                # Safe template
├── .gitignore
├── README.md
└── package.json
</pre>

<hr>

<h2>⚙️ How to Run Locally</h2>

<h3>1. Clone the repository</h3>

```bash
git clone https://github.com/<your-username>/bookstore-api.git
cd bookstore-api
```

<h3>2. Install dependencies</h3>

```bash
npm install
```

<h3>3. Set up environment variables</h3>

```bash
cp .env.example .env
# Open .env and paste your MongoDB Atlas URI into MONGO_URI
```

<h3>4. Start the server</h3>

```bash
npm run dev    # Development (auto-restarts)
npm start      # Production
```

<p><b>Server runs on:</b> http://localhost:5000</p>

<hr>

<h2>📌 API Endpoints</h2>

<p><b>Base URL:</b> <code>http://localhost:5000</code></p>

<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET</td>
    <td><code>/books</code></td>
    <td>Get all books</td>
  </tr>
  <tr>
    <td>GET</td>
    <td><code>/books?search=atomic</code></td>
    <td>Search by title or author</td>
  </tr>
  <tr>
    <td>GET</td>
    <td><code>/books?page=1&limit=5</code></td>
    <td>Paginated results</td>
  </tr>
  <tr>
    <td>POST</td>
    <td><code>/books</code></td>
    <td>Create a new book</td>
  </tr>
  <tr>
    <td>GET</td>
    <td><code>/books/:id</code></td>
    <td>Get a single book by ID</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td><code>/books/:id</code></td>
    <td>Update a book by ID</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td><code>/books/:id</code></td>
    <td>Delete a book by ID</td>
  </tr>
</table>

<hr>

<h2>📝 Sample Requests & Responses</h2>

<h3>POST <code>/books</code> — Create a Book</h3>

<p><b>Request Body:</b></p>

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 20,
  "isbn": "1234567890",
  "publishedDate": "2018-10-16"
}
```

<p><b>Response (201):</b></p>

```json
{
  "success": true,
  "message": "Book created successfully",
  "data": {
    "_id": "64abc123...",
    "title": "Atomic Habits",
    "author": "James Clear",
    "price": 20,
    "isbn": "1234567890",
    "publishedDate": "2018-10-16T00:00:00.000Z",
    "createdAt": "2026-05-20T10:00:00.000Z",
    "updatedAt": "2026-05-20T10:00:00.000Z"
  }
}
```

<h3>Validation Error Response (400)</h3>

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "field": "title", "message": "Title is required" },
    { "field": "price", "message": "Price must be a positive number" }
  ]
}
```

<h3>GET <code>/books?search=atomic&page=1&limit=5</code></h3>

<p><b>Response (200):</b></p>

```json
{
  "success": true,
  "total": 1,
  "page": 1,
  "pages": 1,
  "count": 1,
  "data": []
}
```

<hr>

<h2>🧪 Testing with Postman</h2>

<ol>
  <li>Open Postman and create a collection named <b>Bookstore API</b>.</li>
  <li>Set the base URL to <code>http://localhost:5000</code>.</li>
  <li>Use <code>Content-Type: application/json</code> for POST and PUT requests.</li>
  <li>Test all CRUD endpoints using the examples above.</li>
</ol>

<hr>

<h2>👤 Author</h2>

<p>
Built as part of a Backend Development Internship Task — Phase 2.
</p>
