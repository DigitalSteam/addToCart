const express = require('express');
const parser = require('body-parser');
const faker = require('faker');
const db = require('../db/index.js');

const app = express();
const port = 3002;

app.use(express.static(__dirname + '/../client/dist'));

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//   if (err) res.sendStatus(400);
//   res.sendStatus(200);
// });

app.get('/api/games/:gameId', (req, res) => {
  db.getGameData(req.params.gameId, (err, data) => {
    if (err) throw err;
    // console.log('app.get:', data);
    res.status(200);
    res.json(data[0]);
  });
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
if (process.env.NODE_ENV !== 'test') { 
  app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
}

module.exports = app;