const router = require('express').Router();
const db = require('../models/db');
const nyt = require('../models/webAPI/nytAPI');

router.route('/saved')
  .get((req, res) => {
    db.Article
      .find()
      .then(response => {
        res.json(response)
      }).catch(err => console.log(err));
  })
  .post((req, res) => {
    db.Article
      .create({
        articleId: req.body._id,
        title: req.body.headline,
        date: req.body.date,
        url: req.body.url,
        createdAt: Date.now()
      })
      .then(response => {
        res.json(response);
      })
      .catch(err => console.log(err));
  })
  .delete((req, res) => {
    // TEMP
    res.send('delete request');
  })

router.route('/:query/:startDate/:endDate')
  .get((req, res) => {
    nyt.searchArticles(req.params)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    })
  })

router.route('/:query')
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
