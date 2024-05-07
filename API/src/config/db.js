const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/films");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão"));
db.once("open", function () {
  console.log("Conexão com o database bem-sucedida!");
});

module.exports = db;
