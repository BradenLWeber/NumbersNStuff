const bodyParser = require('body-parser');
const cors = require('cors');
const serverless = require('serverless-http');
const express = require('express');
const database = require('./database');
const _ = require('lodash');
require('dotenv').config();

// Initialize express app
const app = express();
const router = express.Router();

// Apply express middlewares
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Set router base path for local dev
const routerBasePath = `/.netlify/functions/api/`;
app.use(routerBasePath, router);

// normal return objects
const success = { success: true };
// error return objects
const getErrorMessage = (e) => {
  return { success: false, message: e.message };
};

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

router.get('/hello', (req, res) => {
  res.json({ hello: 'hi!' });
});

router.get('/test', async (req, res) => {
  const db = await database;
  res.json({
    env: process.env,
    db: db,
  });
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8888');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

// Export lambda handler
module.exports.handler = serverless(app);
