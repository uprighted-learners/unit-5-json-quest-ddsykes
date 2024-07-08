//Copy and paste your code from creating-json to start this project
// Don't forget to copy your "api" directory and contents as well

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

//middleware
app.use(cor());
app.use(express.json());

app.get("/api/answers", (req, res) => {
  res.sendFile(__dirname + "/answers.json");
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
