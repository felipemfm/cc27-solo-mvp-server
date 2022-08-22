const db = require("../db");

const MESSAGE_TABLE = "message_data";

module.exports = {
  MESSAGE_TABLE,
  getAll() {
    return db
      .select({
        token: "access_token",
        user: "user_name",
        message: "message",
        date: "created_at",
      })
      .from(MESSAGE_TABLE);
  },

  create(token, user, message) {
    return db
      .insert({
        access_token: token,
        user_name: user,
        message: message,
      })
      .into(MESSAGE_TABLE);
  },
};
