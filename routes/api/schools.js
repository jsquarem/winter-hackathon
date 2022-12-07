const express = require('express');
const router = express.Router();
const schoolsController = require('../../controllers/schools');

/*---------- Public Routes ----------*/
router.post('/create', schoolsController.create);

/*---------- Protected Routes ----------*/

module.exports = router;
