const router = require('express').Router();
const productsController = require('../../controllers/products');
/*---------- Public Routes ----------*/
console.log('here - router');
router.get('/find/:productURL', productsController.getAmazonProductByURL);

/*---------- Protected Routes ----------*/

module.exports = router;
