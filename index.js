//app create
const express = require("express");

const app = express();

//PORT Find karan h
require('dotenv').config();
const PORT= process.env.PORT || 3000;

//Middleware add karne h
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());