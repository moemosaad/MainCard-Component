// const mongo = require("../../db/config.js");
const postgres = require("../../db/PostgreSQL/connectPostgres.js");
const helper = require("./helper/routeHelpers.js");

module.exports = {
  getOne: (req, res) => {
    let id = parseInt(req.params.id);
    // console.time("Time to query Postgres");
    // console.time("Time to query Mongo");
    // mongo.then(client => {
    //   client
    //     .db("spottypotatoes")
    //     .collection("movies")
    //     // .createIndex({ movie_id: 1 })
    //     .findOne({ movie_id: id })
    //     .then(data => {
    //       console.timeEnd("Time to query Mongo");
    //       res.send(data);
    //     })
    //     .catch(err => {
    //       res.send(500);
    //     });
    // });

    postgres.query(`SELECT * FROM movies m WHERE m.m = ${id}`, (err, data) => {
      if (err || Array.isArray(data)) {
        // console.log("Postgres query error: ", err);
        res.send(500);
      } else {
        // console.timeEnd("Time to query Postgres");
        data = helper.mapData(data.rows[0]);
        res.send(data);
      }
    });
  }
};
