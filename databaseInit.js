const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

db.run('CREATE TABLE Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT UNIQUE, password TEXT)', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Users table created.');
});

db.run('CREATE TABLE Events (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, location TEXT, time TEXT, date TEXT, user_id INTEGER)', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Events table created.');
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('SQlite database connection closed.');
});
