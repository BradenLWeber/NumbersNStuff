const { MongoClient } = require('mongodb');

let database;
console.log(process.env);
console.log(process.env.MONGO_URI);
const client = new MongoClient(process.env.MONGO_URI || '');

const getDb = async () => {
  if (!database) {
    database = new Promise((res) =>
      client.connect().then((conn) => {
        res(conn.db('MathAddict'));
      }),
    );
  }
  return database;
};

getDb();

module.exports = database;
