const mongoose = require("mongoose");
const { DB_URI } = require("../config/dev");

require("./models/portfolio");

exports.connect = () => {
  return mongoose.connect(DB_URI).then(() => console.log("Connected to MongoDB!"))
  .catch(err => console.error(err))
}

