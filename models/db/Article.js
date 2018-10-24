const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  articleId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
  },
  date: {
    type: Date,
    required: true
  },
  url: {
    type: String,
    required: true
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
