const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { salesTable } = require('../models/mocks/mockSalesTable');

describe('Testes de unidade do service de sales', function () {
  it('Testa a exibição da lista de vendas completa', async function () {
    sinon.stub(salesModel, 'listAllSales').resolves(salesTable);

    const result = await salesService.getAllSales()

    expect(result.message).to.be.deep.equal(salesTable);
    expect(result.type).to.be.equal(null);
  });

  afterEach(function () {
    sinon.restore();
  });
});