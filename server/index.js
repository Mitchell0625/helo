require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const port = 4000;

const cont = require("./controller");

const app = express();

app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(console.log);

app.post(`/api/newPost`);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
