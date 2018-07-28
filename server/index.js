const express = require('express');
const app = express();
const parser = require('body-parser');
// const db = require('../db/index.js');
// const faker = require('faker');

const port = 3002;

app.listen(port, () => {
  console.log('Listening on port' + port);
});

