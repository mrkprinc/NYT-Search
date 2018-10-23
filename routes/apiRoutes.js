const router = require('express').Router();
const db = require('../models/db');
const nyt = require('../models/webAPI/nytAPI');

router.route('/saved')
  .get((req, res) => {
    // TEMP
    res.send('get request');
  })
  .post((req, res) => {
    // TEMP
    res.send('post request');
  })
  .delete((req, res) => {
    // TEMP
    res.send('delete request');
  })

router.route('/')
  .get((req, res) => {
    nyt.searchArticles(req.params)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      })
  })

module.exports = router;
