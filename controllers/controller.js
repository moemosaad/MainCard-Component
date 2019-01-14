const connection = require("../db/config.js");

module.exports = {
  getOne: (req, res) => {
    let id = parseInt(req.params.id);
    connection.then(client => {
      client
        .db("spottypotatoes")
        .collection("movies")
        .findOne({ movie_id: id })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.send(500);
        });
    });
  }
};
