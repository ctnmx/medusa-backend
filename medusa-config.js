// medusa-config.js
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  projectConfig: {
    // Base de données
    database_url: process.env.DATABASE_URL,
    database_type: "postgres",

    // Port imposé par Render (fallback local 9000)
    http: { port: process.env.PORT || 9000 },

    // CORS (laisse vide ou passe par les ENV pour éviter de hardcoder)
    store_cors: process.env.STORE_CORS || "",
    admin_cors: process.env.ADMIN_CORS || "",

    // Redis désactivé si non fourni (PAS de fallback localhost)
    redis_url: process.env.REDIS_URL || undefined,

    // Secrets requis par Medusa
    jwt_secret: process.env.JWT_SECRET,
    cookie_secret: process.env.COOKIE_SECRET,
  },

  // Active les plugins plus tard, quand leurs ENV sont posées
  plugins: [
    // Exemple (à activer plus tard quand les clés sont prêtes) :
    // {
    //   resolve: "@medusajs/medusa-plugin-stripe",
    //   options: {
    //     api_key: process.env.STRIPE_API_KEY,
    //     webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
    //   },
    // },
  ],
};
