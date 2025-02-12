const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Session setup
app.use(session({
  secret: 'fiddle-secret',
  resave: false,
  saveUninitialized: true
}));

app.use('/api', require('./routes.cjs'));

// Serve React build
app.use(express.static('public'));
app.get('*', (req, res) => res.sendFile('public/index.html', { root: '.' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));