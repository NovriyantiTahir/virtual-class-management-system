const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');
const auth = require('../middleware/authMiddleware');

// @route   POST api/attendance
// @desc    Menambahkan kehadiran
// @access  Private
router.post('/', auth, attendanceController.addAttendance);

// @route   GET api/attendance
// @desc    Mendapatkan semua kehadiran
// @access  Private
router.get('/', auth, attendanceController.getAllAttendance);

// @route   GET api/attendance/:id
// @desc    Mendapatkan kehadiran berdasarkan ID
// @access  Private
router.get('/:id', auth, attendanceController.getAttendanceById);

// @route   PUT api/attendance/:id
// @desc    Memperbarui kehadiran
// @access  Private
router.put('/:id', auth, attendanceController.updateAttendance);

// @route   DELETE api/attendance/:id
// @desc    Menghapus kehadiran
// @access  Private
router.delete('/:id', auth, attendanceController.deleteAttendance);

module.exports = router;

