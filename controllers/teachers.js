const User = require('../models/user');
const TeacherProfile = require('../models/teacherProfile');
const School = require('../models/school');

const create = async (req, res) => {
  console.log(req.body, ' req.body in create');
  const userEmail = req.body.userEmail;
  const user = await User.findOne({ email: userEmail });
  const school = await School.findOne({ _id: req.body.school });
  const teacherObject = {
    schoolEmail: req.body.schoolEmail,
    phone: req.body.phone,
    bio: req.body.bio,
    school: school
  };
  const teacherProfile = new TeacherProfile(teacherObject);
  console.log(teacherProfile, '<-teacherProfile');
  try {
    await teacherProfile.save();
    user.teacherProfile = teacherProfile._id;
    await user.save();
    return res.status(200).json(teacherProfile);
  } catch (err) {
    res.status(500).json({
      err: err,
      message: 'Internal Server Error, Please try again'
    });
  }
};

module.exports = {
  create
};
