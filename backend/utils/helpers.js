const moment = require('moment'); // Untuk format tanggal dan waktu
const jwt = require('jsonwebtoken');
const config = require('config');

// Fungsi untuk format tanggal ke format yang lebih mudah dibaca
const formatDate = (date) => {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
};

// Fungsi untuk memverifikasi token JWT
const verifyToken = (token) => {
  try {
    return jwt.verify(token, config.get('jwtSecret'));
  } catch (err) {
    return null;
  }
};

// Fungsi untuk menggenerate token JWT
const generateToken = (userId) => {
  const payload = { user: { id: userId } };
  return jwt.sign(payload, config.get('jwtSecret'), { expiresIn: '1h' });
};

// Fungsi untuk memeriksa apakah suatu string adalah email yang valid
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Fungsi untuk menangani error
const handleError = (err, res) => {
  console.error(err.message);

  if (err.name === 'ValidationError') {
    return res.status(400).json({ errors: err.errors });
  }

  if (err.name === 'MongoError' && err.code === 11000) {
    return res.status(400).json({ msg: 'Duplicate key error' });
  }

  res.status(500).send('Server Error');
};

module.exports = {
  formatDate,
  verifyToken,
  generateToken,
  isValidEmail,
  handleError
};

