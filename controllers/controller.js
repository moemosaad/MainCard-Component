const Movie = require("../models/Movie.js");

module.exports = {
  getOne: (req, res) => {
    let { id } = req.params;
    Movie.find({ id: id })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.send(500);
      });
  }
};
