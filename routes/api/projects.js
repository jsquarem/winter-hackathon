const express = require('express');
const router = express.Router();
const projectsController = require('../../controllers/projects');

/*---------- Public Routes ----------*/
router.post('/createProject', projectsController.createProject);

/*---------- Protected Routes ----------*/

module.exports = router;