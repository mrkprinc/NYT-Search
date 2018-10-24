const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // allow requests from any other server
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'); // allow these verbs
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
  next();
}  
app.use(allowCrossDomain); // plumbing it in as middleware

app.use(express.urlencoded({extended: true}));
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(routes);

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytimes", {useNewUrlParser: true});

app.listen(PORT, ()=> {
  console.log(`-- server ready on port ${PORT} --`)
});