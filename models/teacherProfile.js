const mongoose = require('mongoose');

const teacherProfileSchema = new mongoose.Schema(
  {
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
