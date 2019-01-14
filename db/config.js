const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
var connection = MongoClient.connect(url);
// url,
//   (err, database) => {
//     if (err) {
//       console.log("Mongo Connection Error: ", err);
//     }
//     db = database;
//     // console.log(db);
//   };

// console.log(db);

// const option = {
//   keepAlive: true,
//   reconnectTries: 3000000,
//   useNewUrlParser: true
// };
// if (process.env.NODE_ENV === "production") {
//   mongoose.connect(
//     process.env.MONGO_URI,
//     { useNewUrlParser: true }
//   );
// } else {
// mongoose.connect(
//   "mongodb://localhost/spottypotatoes",
//   option
// );
// }

// module.exports = mongoose.connection;
module.exports = connection;
