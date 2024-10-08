require("dotenv").config();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const { PORT } = process.env;

const corsConfig = {

//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],

   origin: ["http://localhost:5173"],

  credentials: true,
};

const configureApp = () => {
  app.use(cors(corsConfig));
  app.use(morgan("dev"));
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.use('/img', express.static(path.join(__dirname, '..', 'public', 'img')));

  return app;
};

module.exports = {
  configureApp,
  PORT,
};
