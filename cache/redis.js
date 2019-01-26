const redis = require("redis");
const client = redis.createClient("redis://cache:6379");
// process.env.REDIS_URL

client.on("error", function(err) {
  console.log("Error " + err);
});

module.exports = client;
