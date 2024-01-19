import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db;

async function connectDB() {
  if (!db) {
    db = await open({
      filename: "./collection.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }
}

export async function getMeetups(useDB = true) {
  if (useDB) {
    await connectDB();
    return db.all("SELECT * FROM meetups");
  } else {
    const response = await fetch('http://localhost:8080/meetups');
    return response.json();
  }
}
