const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/users');
const multer = require('multer');
const upload = multer();
/*---------- Public Routes ----------*/
router.post('/signup', usersController.signup);
router.post('/login', usersController.login);

/*---------- Protected Routes ----------*/

module.exports = router;
