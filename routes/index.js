const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
  res.send('api ready...')
})

module.exports = router;