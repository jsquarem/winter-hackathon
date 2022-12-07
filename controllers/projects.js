const Project = require('../models/project');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
   publishproject
  };

  async function publishproject(req, res) {
    try {
      const project = await Project.findOne({  });
      console.log(project, ' this project publish ');
    } catch (err) {
      return res.status(401).json({ err: 'error message' });
    }
  }