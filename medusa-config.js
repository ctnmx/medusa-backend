// medusa-config.js
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  projectConfig: {
    // Base de données PostgreSQL
    database_url: process.env.DATABASE_URL,
    database_type: "postgres",

    // CORS pour le frontend et l’admin
    store_cors: "http://localhost:3000,http://127.0.0.1:3000",
    admin_cors: "http://localhost:7000",

    // Redis URL : fallback temporaire si non défini
    redis_url: process.env.REDIS_URL || "redis://127.0.0.1:6379",

    // Port par défaut
    port: process.env.PORT || 9000,
  },
  plugins: [],
};
