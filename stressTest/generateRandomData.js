"use strict";

module.exports = {
  generateRandomData
};

function generateRandomData(context, events, done) {
  const id = Math.floor(Math.random() * (10000 - 101 + 1) + 101);
  context.vars["id"] = id;
  return done();
}
