const mongoose = require("mongoose");

// Database URI
const uri =
  "mongodb+srv://cluster0.7d7iagb.mongodb.net/the hidden ones";

// Connect to database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Success - DB Connect
db.once("connected", () => {
  console.log("MongoDB Connected!");
});

// Failed - DB Connect
db.on("error", (err) => {
  console.log("MongoDB Connection Error: " + err);
});