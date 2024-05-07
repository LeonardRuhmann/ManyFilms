const mongoose = require("mongoose");

const FilmSchema = new mongoose.Schema({
  title: String,
  description: String,
  image_url: String,
  trailer_url: String,
});

const Film = mongoose.model("Film", FilmSchema);

module.exports = Film;
