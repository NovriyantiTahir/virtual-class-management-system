const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Membuat skema untuk Class
const ClassSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  ],
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('class', ClassSchema);

