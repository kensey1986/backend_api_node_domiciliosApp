import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.DB_CNN_STRING || "mongodb://localhost/apicompany",
  PORT: process.env.PORT || 4000,
  SECRET: 'products-api',
};
