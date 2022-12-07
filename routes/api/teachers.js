const express = require('express');
const router = express.Router();
const teachersController = require('../../controllers/teachers');

/*---------- Public Routes ----------*/
router.post('/create', teachersController.create);
router.get('/find/:userID', teachersController.findByUserID)

/*---------- Protected Routes ----------*/

module.exports = router;
