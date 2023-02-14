const connection = require('./db/connection');

const showAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const getProductById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  console.log(id);
  // console.log(result);
  return result;
};

module.exports = {
  showAllProducts,
  getProductById,
};