const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

dotenv.config()
const app = express()