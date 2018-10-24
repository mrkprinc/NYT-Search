const router = require('express').Router();
const db = require('../models/db');
const nyt = require('../models/webAPI/nytAPI');

router.route('/saved')
  .get((req, res) => {
    // TEMP
    res.send('get request');
  })
  .post((req, res) => {
    db.Article
      .create({
        articleId: req.body.article._id,
        title: req.body.article.headline,
        date: req.body.article.date,
        url: req.body.article.url,
        createdAt: Date.now()
      })
      .then(err, response => {
        res.json(response);
      })
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
