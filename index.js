
// app create
const express = require("express");

const app = express();

// PORT find karna hai
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

const fileupload = require("express-fileupload");
app.use(fileupload());

// MongoDB se connect karna hai
const db = require("./Config/database");
db.connect();

// Cloudinary se connect karna hai
const cloudinaryConnect = require("./Config/cloudnary");
cloudinaryConnect.cloudinaryConnect();

// API route mount karna hai
const Upload = require("./routes/FileUplode");
app.use("/api/v1/upload", Upload);

// Activate server
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});

