

const mongoose = require("mongoose");
const { DB_URI } = require("../config/dev");
const fakeDB = require("./FakeDB");

mongoose.connect(DB_URI)
  .then(async () => {
    console.log("> Starting populating DB...");
    await fakeDB.populate();
    await mongoose.connection.close();
    console.log("> DB has been populated...")
  })
  .catch(err => console.error(err))

