const connection = require('./db/connection');

const registerASale = async (date) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUE (?)',
    [date],
  );
  return insertId; // o insertId que é o valor da chave primária gerada pelo banco de dados.
};

// a sale_id é uma chave estrangeira, correspondente à chave primária da tabela sales
const saveSoldProducts = async (sale, insertId) => { 
await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?)',
    [insertId, sale.productId, sale.quantity],
  );
};

// Usando Object.keys para definir as colunas, obtive o seguinte erro: 'Unknown column 'productId' in 'field list''
// Por isso optei por passar o nome das colunas manualmente, para evitar erro

module.exports = {
  registerASale,
  saveSoldProducts,
};

// consultar a aula https://github.com/tryber/sd-025-b-live-lectures/blob/lecture/back-end/5.2/src/models/passenger.model.js