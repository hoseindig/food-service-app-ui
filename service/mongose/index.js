const mongoose = require("mongoose");

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/test01", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on('connected', () => {
  console.log('MongoDB connected to mongodb');
});

db.on('disconnected', () => {
  console.log('MongoDB connection disconnected');
});
// User model
const User = mongoose.model("User", {
  name: { type: String },
  age: { type: Number },
});

var new_user = new User({
  name: "Manish",
  age: 34,
});
///////////////////////////
//
new_user.save(function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
//
///////////////////////////

// find all documents

async function getAllUsre() {
  const user = await User.find({});
  console.log("user ", user);
}
getAllUsre();
