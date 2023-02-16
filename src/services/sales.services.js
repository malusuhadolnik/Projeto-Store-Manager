const { salesModel } = require('../models');

const registerSoldProducts = async (sales) => {
  console.log(`const id ${sales}`);
  
  const date = new Date(); // https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/
  const id = await salesModel.registerASale(date);
  console.log(`const id ${id}`);
  
  // para inserir todos os objetos da array, precisamos fazer um map!
  // cada operação assíncrona é uma promise. queremos o nosso resultado apenas quando todas as promessas fore cumpridas
  // por isso vamos usar o Promise.all!
  const itemsSold = await Promise.all(sales.map(async (sale) => {
    await salesModel.saveSoldProducts(sale, id);
    return sale;
  }));
  
  console.log(`const itemSold ${itemsSold}`); 
  return { id, itemsSold };
  // neste retorno não estou colocando a estrutura type, message por causa do formato que a resposta precisa ter.
};

module.exports = {
  registerSoldProducts,
};