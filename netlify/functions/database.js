const { MongoClient } = require('mongodb');

let database;
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
