const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'new_password',
  database: 'steam_addToCart',
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected!');
  }
});

const getGameData = (gameId, callback) => {
  console.log('getGameData:', gameId);
  connection.query(`SELECT games.name, games.price FROM games WHERE id=${gameId}`, (err, result) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, result);
  });
};

const insertData = (callback, insert) => {
  connection.query(`INSERT INTO games (name, price) VALUES ('${insert.name}', '${insert.price}')`, (err, result) => {
    if (err) callback(err);
    callback(null, result);
  });
};

module.exports = {
  getGameData,
  insertData,
};
``