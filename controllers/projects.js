const Project = require('../models/project');

const createProject = async (req, res) => {
  console.log(req.body, ' req.body in create Project');
  const project = new Project({ ...req.body });
  try {
    await project.save();
    return res.status(200).json(project);
  } catch (err) {
    res.status(500).json({
      err: err,
      message: 'Internal Server Error, Please try again'
    });
  }
};

module.exports = {
  createProject
};