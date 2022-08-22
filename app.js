const express = require("express");

const app = express();

const messageController = require("./message/message.controller");

require("dotenv").config({ path: ".env" });
if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  const cors = require("cors");
  app.use(morgan("dev"));
  app.use(cors());
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", messageController.new);
app.post("/", messageController.create);

module.exports = app;
