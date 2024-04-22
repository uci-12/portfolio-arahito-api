const mongoose = require("mongoose");
const config = require("../config");

require("./models/portfolio");
require("./models/blog");

exports.connect = () => {
  return mongoose.connect(config.DB_URI).then(() => console.log("Connected to MongoDB!"))
  .catch(err => console.error(err))
}

