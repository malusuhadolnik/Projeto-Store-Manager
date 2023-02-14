const { idSchema } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 404, message: 'Product not found' };

  return { type: null, message: '' };
};

module.exports = {
  validateId,
};