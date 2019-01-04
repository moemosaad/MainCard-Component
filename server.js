const app = require("./app.js");
const cors = require("cors");

// app.use(cors());

const port = process.env.PORT || 9001;
console.log(process.env);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
