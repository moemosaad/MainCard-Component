const mongoose = require("mongoose");

if (process.env.NODE_ENV === "production") {
  mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  );
} else {
  mongoose.connect(
    "mongodb://localhost/spottypotatoes",
    { useNewUrlParser: true }
  );
}

module.exports = mongoose.connection;
