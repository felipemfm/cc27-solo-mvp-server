const messageModel = require("./message.model");

let customerCache = [];

module.exports = {
  async new(req, res) {
    const len = req.body.len;
    if (customerCache.length < 1) {
      customerCache = await messageModel.getAll();
    }
    if (customerCache.length === len) {
      res.status(304);
    }
    res.status(200).json(customerCache);
  },

  async create(req, res) {
    const token = req.body.token;
    const user = req.body.user;
    const message = req.body.message;

    if (token === null || user === null || message === null) {
      res.status(400);
    }

    res.status(201).json("Message saved");
    customerCache = [];
    await messageModel.create(token, user, message);
  },
};
