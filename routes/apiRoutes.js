const router = require('express').Router();
const db = require('../models');

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

router.route('/api')
  .get((req, res) => {
    res.json({result1: 'result1', result2: 'result2'});
  })

module.exports = router;
