const express = require('express');
const router = express.Router();
const teachersController = require('../../controllers/teachers');

/*---------- Public Routes ----------*/
router.post('/create', teachersController.create);

/*---------- Protected Routes ----------*/

module.exports = router;
