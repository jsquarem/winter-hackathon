const User = require('../models/user');
const School = require('../models/school');

const create = async (req, res) => {
  console.log(req.body, ' req.body in create school');
  const school = new School({ ...req.body });
  try {
    await school.save();
    return res.status(200).json(school);
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
