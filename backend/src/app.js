const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

app.use(router);

module.exports = app;
