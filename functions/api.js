const bodyParser = require('body-parser');
const cors = require('cors');
const serverless = require('serverless-http');
const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI || '');
let db;
client.connect().then((conn) => {
  db = conn.db('MathAddict');
});

// We need to define our function name for express routes to set the correct base path
const functionName = 'api';

// Initialize express app
const app = express();
const router = express.Router();

// Apply express middlewares
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Set router base path for local dev
const routerBasePath = `/.netlify/functions/${functionName}/`;
app.use(routerBasePath, router);

// normal return objects
const success = { success: true };

router.post('/subscribe', (req, res) => {
  try {
    db.collection('Subscriptions').updateOne(
      { email: req.body.email },
      { $set: { email: req.body.email, enabled: true } },
      { upsert: true },
    );
    res.json(success);
  } catch (e) {
    res.json({ success: false, message: e.message });
  }
});

router.post('/unsubscribe', (req, res) => {
  try {
    db.collection('Subscriptions').updateOne(
      { email: req.body.email },
      { $set: { email: req.body.email, enabled: false } },
    );
    res.json(success);
  } catch (e) {
    res.json({ success: false, message: e.message });
  }
});

router.post('/comment', (req, res) => {
  try {
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
        'This comment was found to contain vulgar content. It will be screened by development before it is made public.';
    res.json(response);
  } catch (e) {
    res.json({ success: false, message: e.message });
  }
});

router.get('/comments', (req, res) => {
  try {
    db.collection('Comments')
      .find({ post: req.query.post })
      .toArray()
      .then((arr) => res.json(arr));
  } catch (e) {
    res.json({ success: false, message: e.message });
  }
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.listen(3001);

// Export lambda handler
exports.handler = serverless(app);
