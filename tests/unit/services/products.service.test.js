const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');
const { productsList } = require('./mocks/products.service.mock');

const mjolnir = {
  "id": 1,
  "name": "Martelo de Thor"
};

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
  
  it('Testa se, ao buscar um produto por ID < 1, retorna um erro', async function () {
    // Este fluxo ocorre anterior à chamada do model, por isso não colocamos stub
    const result = await productsService.getSearchedItem('0');

    expect(result.message).to.be.deep.equal('Product not found');
    expect(result.type).to.be.equal(404);
  });

  it('Testa se, ao não passar um valor para a ID, retorna um erro', async function () {
    // Este fluxo ocorre anterior à chamada do model, por isso não colocamos stub
    const result = await productsService.getSearchedItem('');

    expect(result.message).to.be.deep.equal('Product not found');
    expect(result.type).to.be.equal(404);
  });

  it('Testa se uma ID válida retorna o produto correspondente', async function () {
    sinon.stub(productsModel, 'getProductById').resolves(productsList[0]);

    const result = await productsService.getSearchedItem(1)

    // expect(result).to.be.deep.equal(productsList[0]);
    expect(result.type).to.be.equal(null);
  });

  afterEach(function () {
    sinon.restore();
  });
});


