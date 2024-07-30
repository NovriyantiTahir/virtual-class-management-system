// Memuat variabel lingkungan dari file .env
require('dotenv').config();

// Mengimpor modul yang diperlukan
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const errorHandler = require('./middleware/errorMiddleware'); // Middleware untuk menangani error
const userRoutes = require('./routes/userRoutes');
const classRoutes = require('./routes/classRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');

// Inisialisasi aplikasi Express
const app = express();

// Mengatur port dari variabel lingkungan atau menggunakan port default
const PORT = process.env.PORT || 5000;

// Menggunakan middleware
app.use(express.json()); // Untuk parsing JSON
app.use(cors()); // Untuk menangani CORS

// Menyajikan file statis dari folder 'public' (jika ada)
app.use(express.static(path.join(__dirname, 'public')));

// Rute API
app.use('/api/users', userRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/attendance', attendanceRoutes);

// Rute contoh untuk memverifikasi server
app.get('/', (req, res) => {
  res.send('API Running');
});

// Middleware untuk menangani error
app.use(errorHandler);

// Menghubungkan ke MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Menghubungkan ke database dan memulai server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});

