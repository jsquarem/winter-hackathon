const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersController.signup);
router.post('/login', usersController.login);
router.post('/update', usersController.update);

/*---------- Protected Routes ----------*/

module.exports = router;
