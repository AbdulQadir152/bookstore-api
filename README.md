<h1 align="center">📚 Bookstore REST API</h1>

<p align="center">
A simple RESTful API for managing books in a bookstore using <b>Node.js</b>, <b>Express.js</b>, and <b>MongoDB</b>.
</p>

<p align="center">
Built as part of the Backend Development Internship Task — Phase 2.
</p>

<hr>

<h2>🚀 Features</h2>

<ul>
  <li>Create a new book</li>
  <li>Get all books</li>
  <li>Get a single book by ID</li>
  <li>Update a book</li>
  <li>Delete a book</li>
  <li>MongoDB database integration using Mongoose</li>
  <li>Environment variable support using dotenv</li>
  <li>RESTful API architecture</li>
  <li>API testing with Postman</li>
</ul>

<hr>

<h2>🛠️ Tech Stack</h2>

<table>
  <tr>
    <th>Technology</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td>Node.js</td>
    <td>JavaScript runtime</td>
  </tr>
  <tr>
    <td>Express.js</td>
    <td>Backend framework</td>
  </tr>
  <tr>
    <td>MongoDB</td>
    <td>NoSQL database</td>
  </tr>
  <tr>
    <td>Mongoose</td>
    <td>MongoDB ODM</td>
  </tr>
  <tr>
    <td>dotenv</td>
    <td>Environment variable management</td>
  </tr>
  <tr>
    <td>nodemon</td>
    <td>Development auto-restart tool</td>
  </tr>
  <tr>
    <td>Postman</td>
    <td>API testing</td>
  </tr>
  <tr>
    <td>Git & GitHub</td>
    <td>Version control</td>
  </tr>
</table>

<hr>

<h2>📁 Project Structure</h2>

<pre>
bookstore-api/
├── app.js
├── config/
│   └── db.js
├── controllers/
│   └── bookController.js
├── models/
│   └── Book.js
├── routes/
│   └── bookRoutes.js
├── .env
├── .gitignore
├── package.json
└── package-lock.json
</pre>

<hr>

<h2>⚙️ Installation & Setup</h2>

<h3>1. Clone the Repository</h3>

<pre>
git clone https://github.com/your-username/bookstore-api.git
cd bookstore-api
</pre>

<h3>2. Install Dependencies</h3>

<pre>
npm install
</pre>

<h3>3. Create Environment Variables</h3>

<p>Create a <code>.env</code> file in the root directory and add:</p>

<pre>
PORT=5000
MONGO_URI=your_mongodb_connection_string
</pre>

<hr>

<h2>▶️ Run the Server</h2>

<h3>Development Mode</h3>

<pre>
npm run dev
</pre>

<h3>Production Mode</h3>

<pre>
npm start
</pre>

<p>Server runs at:</p>

<pre>
http://localhost:5000
</pre>

<hr>

<h2>🔌 API Endpoints</h2>

<p><b>Base URL:</b></p>

<pre>
http://localhost:5000
</pre>

<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>/books</td>
    <td>Create a new book</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/books</td>
    <td>Get all books</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/books/:id</td>
    <td>Get a single book by ID</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/books/:id</td>
    <td>Update a book</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/books/:id</td>
    <td>Delete a book</td>
  </tr>
</table>

<hr>

<h2>📘 API Examples</h2>

<h3>1. Create a Book</h3>

<p><b>POST</b> <code>/books</code></p>

<h4>Request Body</h4>

<pre>
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 20,
  "isbn": "1234567890",
  "publishedDate": "2018-10-16"
}
</pre>

<h4>Response</h4>

<pre>
{
  "success": true,
  "message": "Book created successfully",
  "data": {
    "_id": "664b123abc456def78901234",
    "title": "Atomic Habits",
    "author": "James Clear",
    "price": 20,
    "isbn": "1234567890",
    "publishedDate": "2018-10-16T00:00:00.000Z"
  }
}
</pre>

<hr>

<h3>2. Get All Books</h3>

<p><b>GET</b> <code>/books</code></p>

<h4>Response</h4>

<pre>
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "664b123abc456def78901234",
      "title": "Atomic Habits",
      "author": "James Clear",
      "price": 20,
      "isbn": "1234567890"
    }
  ]
}
</pre>

<hr>

<h3>3. Get Book by ID</h3>

<p><b>GET</b> <code>/books/:id</code></p>

<h4>Response</h4>

<pre>
{
  "success": true,
  "data": {
    "_id": "664b123abc456def78901234",
    "title": "Atomic Habits",
    "author": "James Clear",
    "price": 20
  }
}
</pre>

<hr>

<h3>4. Update a Book</h3>

<p><b>PUT</b> <code>/books/:id</code></p>

<h4>Request Body</h4>

<pre>
{
  "price": 25
}
</pre>

<h4>Response</h4>

<pre>
{
  "success": true,
  "message": "Book updated successfully"
}
</pre>

<hr>

<h3>5. Delete a Book</h3>

<p><b>DELETE</b> <code>/books/:id</code></p>

<h4>Response</h4>

<pre>
{
  "success": true,
  "message": "Book deleted successfully"
}
</pre>

<hr>

<h2>❌ Error Responses</h2>

<h3>Book Not Found</h3>

<pre>
{
  "success": false,
  "message": "Book not found"
}
</pre>

<h3>Duplicate ISBN</h3>

<pre>
{
  "success": false,
  "message": "A book with this ISBN already exists"
}
</pre>

<hr>

<h2>🧪 Testing with Postman</h2>

<ol>
  <li>Open Postman</li>
  <li>Create a collection named <b>Bookstore API</b></li>
  <li>Add requests for all endpoints</li>
  <li>Use the header:
    <pre>Content-Type: application/json</pre>
  </li>
  <li>Test CRUD operations using sample JSON data</li>
</ol>

<hr>

<h2>🌐 Deployment (Optional)</h2>

<p>You can deploy this API using:</p>

<ul>
  <li>Render</li>
  <li>Railway</li>
</ul>

<hr>

<h2>📌 Internship Task Details</h2>

<ul>
  <li><b>Task:</b> Backend Development Internship — Phase 2</li>
  <li><b>Project:</b> Build a Simple RESTful API for a Bookstore</li>
  <li><b>Duration:</b> 3 Weeks</li>
  <li><b>Tech Stack:</b> Node.js, Express.js, MongoDB, GitHub, Postman</li>
</ul>

<hr>

<h2>👨‍💻 Author</h2>

<p><b>Abdul Qadir</b></p>

