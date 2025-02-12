import express from 'express';
const router = express.Router();

// Dummy user authentication
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    req.session.user = { isAdmin: true };
    return res.json({ success: true });
  }
  res.status(401).json({ success: false });
});

// Fetch bookings
router.get('/bookings', (req, res) => {
  const bookings = [
    { date: '2025-02-15', time: '10:00 AM', student: 'John Doe' },
    { date: '2025-02-20', time: '12:00 PM', student: 'Jane Smith' }
  ];
  res.json(bookings);
});

module.exports = router;