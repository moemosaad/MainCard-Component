const app = require("./app.js");
const cors = require("cors");

// app.use(cors());

const port = 9001 || process.env.PORT; //Switched order for static port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
