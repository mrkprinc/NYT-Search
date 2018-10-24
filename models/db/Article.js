const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  active: {
    type: Number
  },
  articleId: {
    type: String
  },
  title: {
    type: String
  },
  snippet: {
    type: String,
  },
  date: {
    type: Date
  },
  url: {
    type: String
  },
  note: [{
    type: Schema.Types.ObjectId,
    ref: 'Note'
  }],
  createdAt: {
    type: Date,
    required: true
  }
});

var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;
