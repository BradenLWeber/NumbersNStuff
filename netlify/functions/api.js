console.log('Starting!');
console.log(JSON.stringify(process.env));
const bodyParser = require('body-parser');
console.log('Braden');
const cors = require('cors');
console.log('Braden');
const serverless = require('serverless-http');
console.log('Braden');
const express = require('express');
console.log('Braden');
const database = require('./database');
console.log('Braden');
const _ = require('lodash');
console.log('Braden');
require('dotenv').config();
console.log('Braden');

// We need to define our function name for express routes to set the correct base path
const functionName = 'api';
console.log('Braden');

// Initialize express app
const app = express();
const router = express.Router();
console.log('Braden');

// Apply express middlewares
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
console.log('Braden');

// Set router base path for local dev
const routerBasePath = `/.netlify/functions/${functionName}/`;
app.use(routerBasePath, router);
console.log('Braden');

// normal return objects
const success = { success: true };
// error return objects
const getErrorMessage = (e) => {
  return { success: false, message: e.message };
};
console.log('Braden');

router.post('/subscribe', async (req, res) => {
  try {
    const db = await database;
    db.collection('Subscriptions').updateOne(
      { email: req.body.email },
      { $set: { email: req.body.email, enabled: true } },
      { upsert: true },
    );
    res.json(success);
  } catch (e) {
    res.json(getErrorMessage(e));
  }
});
console.log('Braden');

router.post('/unsubscribe', async (req, res) => {
  try {
    const db = await database;
    db.collection('Subscriptions').updateOne(
      { email: req.body.email },
      { $set: { email: req.body.email, enabled: false } },
    );
    res.json(success);
  } catch (e) {
    res.json(getErrorMessage(e));
  }
});
console.log('Braden');

router.post('/comment', async (req, res) => {
  try {
    const db = await database;
    const { post, date, name, vulgar } = req.body;
    db.collection('Comments').updateOne(
      { post, date, name },
      { $set: req.body },
      {
        upsert: true,
      },
    );

    const response = success;
    if (vulgar)
      response.message =
        'This comment was found to contain vulgar content. It will be screened by moderators before it is made public.';
    res.json(response);
  } catch (e) {
    res.json(getErrorMessage(e));
  }
});
console.log('Braden');

router.get('/comments', async (req, res) => {
  try {
    const db = await database;
    db.collection('Comments')
      .find({ post: req.query.post })
      .toArray()
      .then((arr) => res.json(arr));
  } catch (e) {
    res.json(getErrorMessage(e));
  }
});
console.log('Braden');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8888');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
console.log('Braden');
// Export lambda handler
module.exports.handler = serverless(app);
