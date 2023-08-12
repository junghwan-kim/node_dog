const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv").config();
const basic_port = 3000;
const cors = require("cors");

const PORT = process.env.PORT || basic_port;

// Set CORS option
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "node js" });
});

//라우터
// create, select...
require("./app/routes/dogs.routes")(app);

app.listen(PORT, function () {
  console.log(`server is running on port ${PORT}!!`);
});
