import React from 'react';
import axios from 'axios';
import {SearchBox, ResultsPanel} from './index';

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      displayResults: false,
      resultSet: []
    }
  }

  clickSearch = e => {
    e.preventDefault();
    this.setState({displayResults: true});
    axios.get('https://intense-island-98620.herokuapp.com/api', {
      params: {
        query: document.getElementById('txtTopic').value.trim(),
        startDate: document.getElementById('txtStartDate').value.trim(),
        endDate: document.getElementById('txtEndDate').value.trim()
      }
    }).then(response => {
      let resultSet = response.map(article => {
        return {
          _id: article._id,
          headline: article.headline.main,
          snippet: article.snippet,
          date: article.pub_date,
          url: article.web_url
        }
      })
      this.setState({ resultSet });
    });
  }

  clickSave = e => {
    axios.post('https://intense-island-98620.herokuapp.com/api', {
      article: this.state.resultSet[parseInt(e.target.getAttribute('data-index'))]
    }).then(response => {
      console.log(response);
      e.target.classList.add('saved');
    }).catch(err => console.log(err));
  }

  render() {
    if(this.state.displayResults) {
      return (
        <main>
          <SearchBox clickSearch={this.clickSearch} key={0} />
          <ResultsPanel 
            resultSet={this.state.resultSet} 
            resultSource={'webAPI'} 
            clickSave={this.clickSave} 
            key={1} 
          />
        </main>
      )
    } else {
      return (
        <main>
          <SearchBox clickSearch={this.clickSearch} key={0} />
        </main>
      ) 
    }
  }
}

export default SearchPage;