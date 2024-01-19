const sqlite3 = require("sqlite3").verbose();

// Connecting to or creating a new SQLite database file
const db = new sqlite3.Database(
  "./collection.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

// Serialize method ensures that database queries are executed sequentially
db.serialize(() => {
  // Create the items table if it doesn't exist
  db.run(
    `CREATE TABLE IF NOT EXISTS meetups (
        id INTEGER PRIMARY KEY,
        title TEXT,
        description TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created meetups table.");

      // Clear the existing data in the products table
      db.run(`DELETE FROM meetups`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("All rows deleted from meetups");

        // Insert new data into the products table
        const values1 = [
          "Awesome Meetup",
          "This is an awesome meetup.",
        ];
        const values2 = [
          "Rad meetup",
          "This is the raddest meetup ever.",
        ];

        const insertSql = `INSERT INTO meetups(title, description) VALUES(?, ?)`;

        db.run(insertSql, values1, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(insertSql, values2, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        //   Close the database connection after all insertions are done
        db.close((err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log("Closed the database connection.");
        });
      });
    }
  );
});
