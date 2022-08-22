require("dotenv").config({ path: "../.env" });

console.log(process.env.NODE_ENV);
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
