const router = require('express').Router();
const db = require('../models');

router.route('/articles')
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

router.route('/scrape')
  .get((req, res) => {
    
  })

module.exports = router;
