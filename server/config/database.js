const sqlite3 = require("sqlite3").verbose();


const db = new sqlite3.Database("H:/Project/Job_Task/database/MyDatabase/dua_main.sqlite", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("Connected to the database.");
});


module.exports = db;