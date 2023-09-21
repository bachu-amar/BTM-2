import { config } from "dotenv";
const dev = process.env.NODE_ENV !== "production";
config({ path: `.env.${dev ? "development" : process.env.NODE_ENV}` });
export const CREDENTIALS = process.env.CREDENTIALS === "true";
export const {
  NODE_ENV,
  PORT,
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  SECRET_KEY,
  LOG_FORMAT,
  LOG_DIR,
  ORIGIN,
  MONGODB_URI,
  BASE_URL,
  DB_NAME,
  // SQL
MYSQL_HOST,
MYSQL_PORT,
MYSQL_USER,
MYSQL_PASSWORD,
MYSQL_DATABASE
} = process.env;
