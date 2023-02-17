const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');

const connection = require('../../../src/models/db/connection');
const { newSale } = require('./mocks/mockNewSale');
const { salesTable } = require('./mocks/mockSalesTable');

describe('Testes de unidade do model de vendas', function () {
  it('Testa a função registerASale, que deve retornar a ID da venda', async function () {
    // Arrange: configura o que é necessário para a execução do teste: mock!
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);
    // Act: executa o teste
    const result = await salesModel.registerASale(newSale);
    // Assert:verifica o resultado do teste
    expect(result).to.be.equal(42);
  });

  it('Testa a exibição da lista de vendas completa', async function () {
    sinon.stub(connection, 'execute').resolves([salesTable]);
    const result = await salesModel.listAllSales();
    expect(result).to.be.deep.equal(salesTable);
//   expect(result).to.be.deep.equal(mockTableProducts);
});

  afterEach(function () {
    sinon.restore();
  });
});