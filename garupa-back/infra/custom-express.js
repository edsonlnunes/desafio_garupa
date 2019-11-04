const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const consign = require('consign');

module.exports = () => {
  const app = express();

  app.use(cors());

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  consign()
    .include('src/routes')
    .into(app);

  return app;
}