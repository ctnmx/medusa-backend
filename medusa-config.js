// medusa-config.js
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  projectConfig: {
    database_url: process.env.DATABASE_URL,
    database_type: "postgres",
    store_cors: "http://localhost:3000,http://127.0.0.1:3000",
    admin_cors: "http://localhost:7000",
  },
  plugins: [],
};
