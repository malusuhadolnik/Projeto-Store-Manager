const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');

const connection = require('../../../src/models/db/connection');
const { mockTableProducts } = require('./mocks/mockTableProducts');

describe('Testes de unidade do model de produtos', function () {
  it('Testa a exibição da lista de produtos', async function () {
    // Arrange: configura o que é necessário para a execução do teste: mock!
    sinon.stub(connection, 'execute').resolves([mockTableProducts]);
    // Act: executa o teste
    const result = await productsModel.showAllProducts();
    // Assert:verifica o resultado do teste
    expect(result).to.be.deep.equal(mockTableProducts);
  });

  afterEach(function () {
    sinon.restore();
  });
});