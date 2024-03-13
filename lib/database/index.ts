import mongoose from "mongoose";

let cached = (global as any).mongoose || { conn: null, promise: null };

const MONGODB_URI = process.env.MONGODB_URI;

export const connectToDataBase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI)
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  cached.conn == (await cached.promise);

  return cached.conn;
};
