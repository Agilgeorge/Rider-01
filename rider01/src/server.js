// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors()); 

// Database connection
mongoose.connect('mongodb://localhost:27017/rider01', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.error("Could not connect to MongoDB", error));

// User schema and model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Middleware for JWT authentication
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(403).json({ error: 'Access denied' });
  
  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Sign-up paadhai
app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'User registration failed' });
  }
});

// Sign-in paadhai
app.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

app.get('/protected', auth, (req, res) => {
  res.json({ message: 'This is a protected route', userId: req.user.userId });
});

app.get('/', (req, res) => {
  res.send(`
    <h2>Sign Up</h2>
    <form id="signupForm">
      <input type="email" id="signupEmail" placeholder="Email" required />
      <input type="password" id="signupPassword" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <h2>Sign In</h2>
    <form id="signinForm">
      <input type="email" id="signinEmail" placeholder="Email" required />
      <input type="password" id="signinPassword" placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
    <button id="protectedRouteBtn">Access Protected Route</button>
    <script>
      const baseUrl = 'http://localhost:5000';
      document.getElementById('signupForm').onsubmit = async (e) => {
        e.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const response = await fetch(\`\${baseUrl}/signup\`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        alert(data.message);
      };
      document.getElementById('signinForm').onsubmit = async (e) => {
        e.preventDefault();
        const email = document.getElementById('signinEmail').value;
        const password = document.getElementById('signinPassword').value;
        const response = await fetch(\`\${baseUrl}/signin\`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        alert(data.message);
        localStorage.setItem('token', data.token);
      };
      document.getElementById('protectedRouteBtn').onclick = async () => {
        const token = localStorage.getItem('token');
        const response = await fetch(\`\${baseUrl}/protected\`, {
          headers: { 'Authorization': 'Bearer ' + token }
        });
        const data = await response.json();
        alert(JSON.stringify(data));
      };
    </script>
  `);
});

// Start the server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
