const express = require('express');

const { salesController } = require('../controllers');
const { validateQuantity } = require('../middlewares/validateSaleInfo');

const salesRouter = express.Router();

salesRouter.post('/', validateQuantity, salesController.insertSale);

module.exports = salesRouter;