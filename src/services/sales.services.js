const { salesModel } = require('../models');

const registerSoldProducts = async (sales) => {
  const date = new Date(); // https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/
  const id = await salesModel.registerASale(date);
  
  // para inserir todos os objetos da array, precisamos fazer um map!
  // cada operação assíncrona é uma promise. queremos o nosso resultado apenas quando todas as promessas fore cumpridas
  // por isso vamos usar o Promise.all!
  const itemsSold = await Promise.all(sales.map(async (sale) => {
    await salesModel.saveSoldProducts(sale, id);
    return sale;
  }));
  
  return { id, itemsSold };
  // neste retorno não estou colocando a estrutura type, message por causa do formato que a resposta precisa ter.
};

const getAllSales = async () => {
  const allSales = await salesModel.listAllSales();
  return { type: null, message: allSales };
};

const getSaleById = async (id) => {
  const querySale = await salesModel.listSaleById(id);
  
  if (querySale.length >= 1) {
    return { type: null, message: querySale };
  }
  return { type: 404, message: 'Sale not found' };
};

module.exports = {
  registerSoldProducts,
  getAllSales,
  getSaleById,
};