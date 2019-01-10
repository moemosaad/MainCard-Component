const mongoose = require("mongoose");
const option = {
  keepAlive: true,
  reconnectTries: 3000000,
  useNewUrlParser: true
};
// if (process.env.NODE_ENV === "production") {
//   mongoose.connect(
//     process.env.MONGO_URI,
//     { useNewUrlParser: true }
//   );
// } else {
mongoose.connect(
  "mongodb://localhost/spottypotatoes",
  option
);
// }

module.exports = mongoose.connection;
