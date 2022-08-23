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

app.get("/api/", messageController.new);
app.post("/api/", messageController.create);

module.exports = app;
