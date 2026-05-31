const { DatabaseSync } = require('node:sqlite');
const db = new DatabaseSync('test.db');
db.exec('CREATE TABLE IF NOT EXISTS test (id TEXT)');
db.exec('INSERT INTO test (id) VALUES ("1")');
const rows = db.prepare('SELECT * FROM test').all();
console.log(rows);
