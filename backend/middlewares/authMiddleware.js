const jwt = require('jsonwebtoken');
const config = require('config');

// Middleware untuk memverifikasi token JWT
function auth(req, res, next) {
  // Mendapatkan token dari header
  const token = req.header('x-auth-token');

  // Periksa jika tidak ada token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verifikasi token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}

module.exports = auth;

