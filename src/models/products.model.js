const connection = require('./db/connection');

const showAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const getProductById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return result;
};

const insertNewProducts = async (name) => {
  const [updated] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );
  return updated;
};

const getProductByName = async (name) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE name = ?',
    [name],
  );
  return result;
};

module.exports = {
  showAllProducts,
  getProductById,
  insertNewProducts,
  getProductByName,
};