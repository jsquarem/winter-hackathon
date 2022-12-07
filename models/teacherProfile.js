const mongoose = require('mongoose');

const teacherProfileSchema = new mongoose.Schema(
  {
    schoolEmail: { type: String, required: true },
    phone: { type: String, required: false },
    bio: { type: String, required: false },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'School',
      required: true
    },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('TeacherProfile', teacherProfileSchema);
