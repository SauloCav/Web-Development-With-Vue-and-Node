const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const index = require("./routes/index.js");
const cars = require("./routes/car-route");
const cors = require("cors");

app.use(cors());
app.use("/", index);
app.use("/cars", cars);
app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
});

// Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
