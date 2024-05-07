const Film = require("../models/Film.js");

exports.getAllFilms = async (req, res) => {
  try {
    const films = await Film.find();
    return res.send(films);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.createFilm = async (req, res) => {
  try {
    const film = new Film({
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      trailer_url: req.body.trailer_url,
    });
    await film.save();
    return res.status(200).json("Film created successfully!");
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.updateFilm = async (req, res) => {
  try {
    const film = await Film.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      trailer_url: req.body.trailer_url,
    });

    return res.status(200).json("Film has been updated successfully");
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.deleteFilm = async (req, res) => {
  try {
    const film = await Film.findByIdAndDelete(req.params.id);
    return res.status(200).json("Film has been deleted successfully");
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
