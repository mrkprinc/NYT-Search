const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(routes);

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytimes");

app.listen(PORT, ()=> {
  console.log(`-- server ready on port ${PORT} --`)
});