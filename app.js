const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello Welocme to Express JS");
});

app.listen(3002, () => {
  console.log(`listening on port 30002`);
});
