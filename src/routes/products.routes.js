const express = require('express');
const { productsController } = require('../controllers');

const productsRouter = express.Router();

productsRouter.get('/', productsController.listAllProducts);
productsRouter.get('/:id', productsController.listSearchedItem);
productsRouter.post('/', productsController.insertNewItem);

module.exports = productsRouter;