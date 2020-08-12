/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable padded-blocks */
/* eslint-disable no-unused-vars  */

const express = require('express');

const emojis = require('./emojis');
const faqs = require('./faqs');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/faqs', faqs);

module.exports = router;
