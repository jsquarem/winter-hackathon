const amazonScraper = require('amazon-buddy');
console.log('in controller');

const getAmazonProductByURL = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  console.log('here');
  try {
    const productURL = req.params.productURL;
    const product_by_asin = await amazonScraper.asin({ asin: 'B09R7LWF92' });
    //const productObject = await JSON.stringify(product_by_asin);
    console.log(product_by_asin, '<-product_by_asin');
    // const ingredientsList = await getIngredientsByRecipeID(recipeIDs);
    res.status(201).json(product_by_asin);
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
};

module.exports = {
  getAmazonProductByURL
};
