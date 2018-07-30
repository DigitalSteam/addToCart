const express = require('express');
const parser = require('body-parser');
const faker = require('faker');
const db = require('../db/index.js');

const app = express();
const port = 3002;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// below code is used initially to populate database with fake data (100 entries)

// const populateDb = () => {
//   for (let i = 0; i < 100; i += 1) {
//     db.insertData((err) => {
//       if (err) throw err;
//       console.log('Successfully inserted data!');
//     }, {
//       name: faker.lorem.words(),
//       price: faker.commerce.price(),
//     });
//   }
// };

// populateDb();
