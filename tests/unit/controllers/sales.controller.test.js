const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const { salesTable } = require('../models/mocks/mockSalesTable');

describe('Teste de unidade do crontroller de vendas', function () {
  describe('Listando as vendas', function () {
    it('Deve retornar o status 200 e a lista como mensagem', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res); 
      res.json = sinon.stub().returns();  
      sinon
        .stub(salesService, 'getAllSales')
        .resolves({ type: null, message: salesTable });

      await salesController.listSales(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(salesTable);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
