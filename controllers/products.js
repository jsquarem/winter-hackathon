const amazonScraper = require('amazon-buddy');
const amazonAsin = require('amazon-asin');
console.log('in controller');

const getAmazonProductByURL = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  console.log('here');
  // const productURL = req.params.productURL;
  const productURL =
    'https://www.amazon.com/dp/B002DMK0I0/ref=va_live_carousel?pf_rd_r=5G7RB85DD1M3W7ZT1C50&pf_rd_p=3ec402b5-e0cb-48b1-86bb-93021ce0ad37&pf_rd_m=ATVPDKIKX0DER&pf_rd_t=Landing&pf_rd_i=3760911&pf_rd_s=merchandised-search-2&linkCode=ilv&tag=sophiesumne01-20&ascsubtag=Holiday_Beauty_Gift_Guide_221201200000&asc_contentid=amzn1.amazonlive.broadcast.4b702cb6-c48b-47a2-a29d-68b3a58661a8&pd_rd_i=B002DMK0I0&th=1&psc=1';
  const amazonASIN = amazonAsin.syncParseAsin(productURL).ASIN;
  console.log(amazonASIN, '<-amazonASIN');
  try {
    const product_by_asin = await amazonScraper.asin({ asin: amazonASIN });
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
