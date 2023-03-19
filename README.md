# Projeto Store Manager

# Sobre
Este projeto foi desenvolvido durante o Módulo 3 - Back-End do curso de Desenvolvimento Web da Trybe.

Nele, foi construída uma API utilizando a arquitetura MSC (model-service-controller). Esta API consiste em um sistema de gerenciamento de vendas no formato dropshipping, que permite criar, visualizar, atualizar e deletar produtos e vendas (operações CRUD). Algumas das rotas possuem validações de dados. O banco de dados utilizado foi o MySQL. Também foram implementados testes para as funções de cada camada, utilizando o Mocha.

Os arquivos desenvolvidos por mim estão na pasta src e tests. Os demais foram desenvolvidos pelo time da Trybe.

## Descrição dos endpoints:
<table>
  <thead>
    <tr>
      <th>Método HTTP</th>
      <th>Endpoint</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/products</td>
      <td>Deve listar todos os produtos</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/products/:id</td>
      <td>Deve listar o produto que corresponde à ID requisitada</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/products</td>
      <td>Deve cadastrar um novo produto, e retornar um objeto que contenha os dados do cadastro, juntamente com sua id</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/products/:id</td>
      <td>Deve alterar o nome do produto de id correspondente, e retornar um objeto mostrando a alteração, e id do produto .</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/products/:id</td>
      <td>Deve ser capaz de deletar um produto com base na id requisitada na rota.</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/sales</td>
      <td>Deve listar todos as vendas</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/sales/:id</td>
      <td>Deve listar a venda que corresponde à ID requisitada</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/sales</td>
      <td>Deve cadastrar um nova venda, e retornar um objeto que contenha os dados do cadastro, juntamente com sua id</td>
    </tr>
  </tbody>
</table>

## Tecnologias usadas

> Back-End
Docker, docker-compose, SQL, Node.js, Mocha

## Instalando Dependências

### Usando o Docker

1. Clone este repositório em su máquina, e em seguida suba o container:
```bash
docker-compose up -d
``` 
- Serão inicializados os containers store_manager e store_manager_db

2. Dentro do diretório do projeto, execute o conteiner:
```bash
docker exec -it store_manager bash
``` 
- As credencias de acesso ao banco de dados estão definidas no arquivo docker-compose.yml.

3. Agora instale as dependências dentro do container:
```bash
npm install
``` 
### Rodando localmente

 - É necessário ter o ```node``` (versão 16 ou superior) instalado em sua máquina.
 
 1. Clone este repositório em su máquina, e em seguida instale as dependências:
 ```bash
npm install
```
### Para inicializar o servidor
- Faça isso dentro do conatiner, se estiver o utilizando.
```bash
npm run debug
``` 
### Para realizar os testes unitários
- Faça isso fora do container, se estiver o utilizando.
```bash
npm run test:mocha
``` 
