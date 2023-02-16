const productsModel = require('../models/products.model');

const validateQuant = (req, res, next) => {
  const sales = req.body; 

  const hasQuantity = sales.every(({ quantity }) => quantity !== undefined && quantity !== null);
  // console.log(`hasQuantity: ${hasQuantity}`);
  const isEqOrHigherThan1 = sales.every((sale) => sale.quantity >= 1);
  
  if (hasQuantity === false) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  if (isEqOrHigherThan1 === false) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  return next();
};

const hasProductId = (req, res, next) => {
  const sales = req.body; 

  const hasId = sales.every(({ productId }) => productId !== undefined && productId !== null);

  if (!hasId) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  return next();
};

const validateProdId = async (req, res, next) => {
  const sales = req.body; 
  
  if (sales.lenght === 1) {
    const { productId } = sales;
    const isIdValid = await productsModel.getProductById(productId);
    return isIdValid;
  }

  const getProducts = await Promise.all(sales.map(async ({ productId }) => {
  const product = await productsModel.getProductById(productId);
  return product;
  }));
  
  const isIdValid = getProducts.every((product) => product !== undefined && product !== null);

  if (!isIdValid) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return next();
};

module.exports = {
  validateQuant,
  hasProductId,
  validateProdId,
};