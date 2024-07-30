// keys.js

if (process.env.NODE_ENV === 'production') {
  // Pada lingkungan produksi, gunakan variabel lingkungan yang sesuai
  module.exports = {
    mongoURI: process.env.MONGO_URI,
    secretOrKey: process.env.SECRET_OR_KEY
  };
} else {
  // Pada lingkungan pengembangan, gunakan variabel lingkungan lokal
  module.exports = {
    mongoURI: 'mongodb://localhost:27017/nama_database',
    secretOrKey: 'your_secret_key'
  };
}

