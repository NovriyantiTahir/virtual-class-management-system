const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Membuat skema untuk Attendance
const AttendanceSchema = new Schema({
  class: {
    type: Schema.Types.ObjectId,
    ref: 'class',
    required: true
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Present', 'Absent', 'Late', 'Excused'],
    required: true
  },
  remarks: {
    type: String
  }
});

module.exports = mongoose.model('attendance', AttendanceSchema);

