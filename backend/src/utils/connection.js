const mongoose = require("mongoose");

// Connecting to database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    const db = conn.connection.useDb("todoApp");

    const todoCollection = db.collection("todos");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = { connectDB };
