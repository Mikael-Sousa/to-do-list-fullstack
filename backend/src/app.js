const express = require('express');
const cors = require('cors')
const router = require('./router')

const app = express();

app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
}))
app.use(router)

module.exports = app;