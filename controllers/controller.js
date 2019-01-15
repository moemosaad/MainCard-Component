const mongo = require("../db/config.js");
const postgres = require("../db/PostgreSQL/connectPostgres.js");

module.exports = {
  getOne: (req, res) => {
    let id = parseInt(req.params.id);
    console.time("query");

    // mongo.then(client => {
    //   client
    //     .db("spottypotatoes")
    //     .collection("movies")
    //     // .createIndex({ movie_id: 1 })
    //     .findOne({ movie_id: id })
    //     .then(data => {
    //       console.timeEnd("query");
    //       res.send(data);
    //     })
    //     .catch(err => {
    //       res.send(500);
    //     });
    // });
    // console.log(postgres);

    postgres.query(`SELECT * FROM movies m WHERE m.m = ${id}`, (err, data) => {
      if (err) {
        console.log("Postgres query error: ", err);
        res.send(500);
      } else {
        console.timeEnd("query");
        res.send(data);
      }
    });
  }
};
