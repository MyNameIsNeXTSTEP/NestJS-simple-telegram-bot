/* eslint-disable prettier/prettier */
export default () => ({
  dbConfig: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  telegram: {
    token: process.env.TG_BOT_TOKEN,
  },
});
