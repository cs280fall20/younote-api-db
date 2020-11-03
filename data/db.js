require("dotenv").config();
const mongoose = require("mongoose");

const password = process.env.DB_ADMIN_PASSWORD;
const dbname = "younote-db";
const URI = `mongodb+srv://younote-admin:${password}@younote-api.cwpws.mongodb.net/${dbname}?retryWrites=true&w=majority`;
const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

function connect() {
  mongoose.connect(URI, option);

  mongoose.connection.on("error", (err) => {
    console.log(err);
  });

  mongoose.connection.on("open", () => {
    console.log("Connected to MongoDB!");
  });
}

module.exports = { connect };