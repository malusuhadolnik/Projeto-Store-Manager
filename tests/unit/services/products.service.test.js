const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');
const { productsList } = require('./mocks/products.service.mock');

describe('Testes de unidade do service de produtos', function () {
  it('Testa a exibição da lista de produtos', async function () {
    // Arrange: configura o que é necessário para a execução do teste: mock!
    sinon.stub(productsModel, 'showAllProducts').resolves(productsList);
    // Act: executa o teste
    const result = await productsService.getAllProducts()
    // Assert:verifica o resultado do teste
    expect(result.message).to.be.deep.equal(productsList);
    expect(result.type).to.be.equal(null);
  });

  afterEach(function () {
    sinon.restore();
  });
});