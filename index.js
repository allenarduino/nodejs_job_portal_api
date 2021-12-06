//importing dependencies
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

app.get("/",(req,res)=>{
    res.end("<h1>Welcome to Jones Job portal</h1>")
})

const PORT = process.env.PORT || 5000;
module.exports = app.listen(PORT, function () {
  console.log(`Server running on port:${PORT}`);
});