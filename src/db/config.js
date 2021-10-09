const sqlite3 = require('sqlite3');
const { open } = require('sqlite'); //importando apenas a função "open" do sqlite

module.exports = () =>
  open({
    filename: './src/db/rocketq.sqlite',
    driver: sqlite3.Database //driver é o que comanda o arquivo de banco de dados
  });
