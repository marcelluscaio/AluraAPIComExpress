import mongoose from "mongoose";

async function connectWithDatabase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
}

export default connectWithDatabase;