const express = require('express');

const { salesController } = require('../controllers');
const { validateQuant, hasProductId, validateProdId } = require('../middlewares/validateSaleInfo');

const salesRouter = express.Router();

salesRouter.post('/', validateQuant, hasProductId, validateProdId, salesController.insertSale);
salesRouter.get('/', salesController.listSales);
salesRouter.get('/:id', salesController.listSearchedSale);

module.exports = salesRouter;