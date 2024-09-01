const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listen in port: ${process.env.PORT}`);
});
