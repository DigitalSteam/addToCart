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

// const insertData = (callback, insert) => {
//   connection.query(`INSERT INTO games (name) VALUES ('${insert.name}')`, (err, result) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, result);
//     }
//   });

//   connection.query(`INSERT INTO games (price) VALUES ('${insert.price}')`, (err, result) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, result);
//     }
//   });
// };

const insertData = (callback, insert) => {
  connection.query(`INSERT INTO games (name, price) VALUES ('${insert.name}', '${insert.price}')`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  insertData,
};
