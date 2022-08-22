const express = require("express");

const app = express();

require("dotenv").config({ path: ".env" });
if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  const cors = require("cors");
  app.use(morgan("dev"));
  app.use(cors());
}

app.use(express.json());

module.exports = app;
