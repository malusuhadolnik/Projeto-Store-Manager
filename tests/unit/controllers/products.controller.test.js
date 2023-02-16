const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { productListMock } = require('./mocks/products.controller.mock');

describe('Teste de unidade do crontroller de produtos', function () {
  describe('Listando os produtos', function () {
    it('Deve retornar o status 200 e a lista como mensagem', async function () {
      // arrange - a função do controller é um middleware do express,por isso fazemos dublês de req e res
      const res = {};
      const req = {}; // não usamos req dentro da função, por isso o dublê é um obj vazio

    // mas usamos o obj res! então vamos fazer um dublê do tipo spy
      res.status = sinon.stub().returns(res); // emula o resultado da função satus
      res.json = sinon.stub().returns();  //emula o resultado da função json
      sinon
        .stub(productsService, 'getAllProducts')
        .resolves({ type: null, message: productListMock });

      // act
      await productsController.listAllProducts(req, res);

      // assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productListMock);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});

