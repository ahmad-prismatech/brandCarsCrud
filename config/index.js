require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  db: "mongodb+srv://prisma:prismatech@cluster0.4wipw.mongodb.net/pan_test?authSource=admin&replicaSet=atlas-kk0rhp-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
};
