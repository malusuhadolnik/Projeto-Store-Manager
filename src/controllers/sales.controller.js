const { salesService } = require('../services');

const insertSale = async (req, res) => {
  const arrayNewSales = req.body;
  console.log(`arrayNewSales: ${arrayNewSales}`);

  const theSale = await salesService.registerSoldProducts(arrayNewSales);
  console.log(`const theSale ${theSale}`);

  if (!theSale) {
    return { type: 404, message: 'Page not found' };
  }
  res.status(201).json(theSale);
};

module.exports = {
 insertSale,
};