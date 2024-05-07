const express = require("express");
const filmRoutes = require("./src/router/filmRoutes.js");
const db = require("./src/config/db.js");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/", filmRoutes);

app.listen(port, () => {
  console.log("The server was started on " + port);
});
