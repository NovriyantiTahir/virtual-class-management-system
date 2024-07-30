const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Membuat skema untuk Attendance
const AttendanceSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Present', 'Absent', 'Late'],
    required: true
  },
  notes: {
    type: String
  }
});

module.exports = mongoose.model('attendance', AttendanceSchema);

