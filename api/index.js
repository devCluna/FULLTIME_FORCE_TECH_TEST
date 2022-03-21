const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const router = require('./routes')

//config
dotenv.config();
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Routes
app.use('/api', router)

//server PORT
app.listen(process.env.SERVER_PORT, () => {
  console.log("Listening on Port:", process.env.SERVER_PORT);
});
