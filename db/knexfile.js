const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

module.exports = {
  client: "pg",
  connection:
    process.env.NODE_ENV === "production"
      ? {
          connectionString: process.env.DATABASE_URL,
        }
      : {
          database: process.env.DB_NAME,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
        },
  migrations: { directory: "./migrations/" },
};
