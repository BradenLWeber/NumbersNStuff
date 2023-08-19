import mongoose from 'mongoose';

export class Database {
  constructor() {
    mongoose.connect(
      'mongodb://localhost:27017/',
      {
        dbName: 'yourDB-name',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) =>
        err
          ? console.log(err)
          : console.log('Connected to yourDB-name database'),
    );
  }
}
