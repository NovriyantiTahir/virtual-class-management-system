const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

// @route   POST api/users/register
// @desc    Mendaftarkan pengguna baru
// @access  Public
router.post('/register', userController.registerUser);

// @route   POST api/users/auth
// @desc    Autentikasi pengguna & mendapatkan token
// @access  Public
router.post('/auth', userController.authUser);

// @route   GET api/users
// @desc    Mendapatkan semua pengguna
// @access  Private
router.get('/', auth, userController.getAllUsers);

// @route   GET api/users/:id
// @desc    Mendapatkan pengguna berdasarkan ID
// @access  Private
router.get('/:id', auth, userController.getUserById);

// @route   PUT api/users/:id
// @desc    Memperbarui pengguna
// @access  Private
router.put('/:id', auth, userController.updateUser);

// @route   DELETE api/users/:id
// @desc    Menghapus pengguna
// @access  Private
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;

