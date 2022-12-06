const mongoose = require('mongoose');

const teacherProfileSchema = new mongoose.Schema(
  {
    schoolEmail: { type: String, required: true },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'School',
      required: true
    },
    campaigns: []
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('TeacherProfile', teacherProfileSchema);
