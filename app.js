const express = require("express");
const path = require("path");

const app = express();

const messageController = require("./message/message.controller");

require("dotenv").config({ path: ".env" });
if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  const cors = require("cors");
  app.use(morgan("dev"));
  app.use(cors());
}

app.use(express.static(path.join(__dirname, "./build")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/", messageController.new);
app.post("/api/", messageController.create);

app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

module.exports = app;
