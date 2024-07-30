const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');
const auth = require('../middleware/authMiddleware');

// @route   POST api/classes
// @desc    Menambahkan kelas
// @access  Private
router.post('/', auth, classController.addClass);

// @route   GET api/classes
// @desc    Mendapatkan semua kelas
// @access  Private
router.get('/', auth, classController.getAllClasses);

// @route   GET api/classes/:id
// @desc    Mendapatkan kelas berdasarkan ID
// @access  Private
router.get('/:id', auth, classController.getClassById);

// @route   PUT api/classes/:id
// @desc    Memperbarui kelas
// @access  Private
router.put('/:id', auth, classController.updateClass);

// @route   DELETE api/classes/:id
// @desc    Menghapus kelas
// @access  Private
router.delete('/:id', auth, classController.deleteClass);

module.exports = router;

