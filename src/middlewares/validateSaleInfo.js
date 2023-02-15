const validateQuantity = (req, res, next) => {
  const sales = req.body; 

  // const hasQuantity = sales.every((sale) => sale.hasOwnProperty('quantity'));
  const isEqOrHigherThan1 = sales.every((sale) => sale.quantity >= 1);
  
  // if (hasQuantity === false) {
  //   return res.status(400).json({ message: '"quantity" is required' });
  // }
  if (isEqOrHigherThan1 === false) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  return next();
};

// const isProdIdPresent = (req, res, next) => {
//   const { productId } = req.body
//   console.log(productId);

//   if (!productId) {
//     return res.status(400).json({ message: '"productId" is required' });
//   }
//   return next();
// };
  
module.exports = {
  validateQuantity,
};