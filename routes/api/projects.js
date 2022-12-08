const express = require('express');
const router = express.Router();
// const multer = require("multer")
const projectsController = require('../../controllers/projects');

/*---------- Public Routes ----------*/
router.post('/createProject', projectsController.createProject);

/*---------- Protected Routes ----------*/

module.exports = router;
