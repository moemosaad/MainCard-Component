const mongoose = require("mongoose");

if (process.env.NODE_ENV === "production") {
  mongoose.connect(MONGO_URI);
} else {
  mongoose.connect(
    "mongodb://localhost/spottypotatoes",
    { useNewUrlParser: true }
  );
}

module.exports = mongoose.connection;
