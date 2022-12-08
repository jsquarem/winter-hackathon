const express = require('express');
const router = express.Router();
// const multer = require("multer")
const projectsController = require('../../controllers/projects');

/*---------- Public Routes ----------*/
router.post('/create', projectsController.create);

/*---------- Protected Routes ----------*/

module.exports = router;
