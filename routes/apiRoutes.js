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
        title: req.body.title,
        snippet: req.body.snippet,
        date: req.body.date,
        url: req.body.url,
        active: 1,
        createdAt: Date.now()
      })
      .then(response => {
        res.json(response);
      })
      .catch(err => console.log(err));
  })

router.put('/saved/remove/:id', (req, res) => {
  db.Article
    .update({articleId: req.params.id}, {$set: {active: 0}})
    .then(response => {
      res.json(response);
    })
    .catch(err => console.log(err));
})

router.get('/:query/:startDate/:endDate', (req, res) => {
  nyt.searchArticles(req.params)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    })
})

router.get('/:query', (req, res) => {
  nyt.searchArticles(req.params)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router;
