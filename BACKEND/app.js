require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const sweetRoutes = require("./routes/SweetRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/sweets', sweetRoutes);
app.use("/", (req, res) => {
  res.send("Welcome to the Sweet Shop API!");});

  module.exports = app;

