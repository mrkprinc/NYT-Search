const axios = require('axios');

module.exports = {
  searchArticles(params) {
    return new Promise((resolve, reject) => {
      let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
      axios.get(url, {
        params: {
          'api-key': process.env.APIKEY,
          'q': params.q,
          'begin_date': params.startDate,
          'end_date': params.endDate,
          'fl': 'web_url,snippet,headline,pub_date,byline,_id'
        }
      }).then((result) => {
        resolve(result.data.response.docs);
      })
    })
  }
}