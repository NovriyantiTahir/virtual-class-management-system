// Import Mongoose
const mongoose = require('mongoose');

// Tentukan URI MongoDB
const dbURI = 'mongodb://localhost:27017/nama_database';

// Konfigurasi opsi koneksi
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};

// Fungsi untuk menghubungkan ke database
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, options);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Keluar dari proses dengan gagal
    process.exit(1);
  }
};

// Ekspor fungsi connectDB
module.exports = connectDB;

