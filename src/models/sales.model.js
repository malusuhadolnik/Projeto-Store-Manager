const connection = require('./db/connection');

const registerASale = async (date) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUE (?)',
    [date],
  );
  return insertId; // o insertId que é o valor da chave primária gerada pelo banco de dados.
};

// a sale_id é uma chave estrangeira, correspondente à chave primária da tabela sales
const saveSoldProducts = async (salesObject, insertId) => { 
  const columns = Object.keys(salesObject).join(', ');
  const placeholders = Object.keys(salesObject).map((_key) => '?').join(', ');

  const updateSale = await connection.execute(
    `INSERT INTO StoreManager.sales_products (sale_id, ${columns}) VALUE (${placeholders}, ?)`,
    [insertId, ...Object.values(salesObject)],
  );
  
  return updateSale; 
};

module.exports = {
  registerASale,
  saveSoldProducts,
};

// consultar a aula https://github.com/tryber/sd-025-b-live-lectures/blob/lecture/back-end/5.2/src/models/passenger.model.js