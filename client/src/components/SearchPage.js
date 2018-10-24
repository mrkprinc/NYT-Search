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
    this.setState({
      resultSet: [],
      displayResults: true
    });
    let url = 'https://intense-island-98620.herokuapp.com/api/' + document.getElementById('txtTopic').value.trim();
    let startEntered = document.getElementById('txtStartDate').value.trim();
    let endEntered = document.getElementById('txtEndDate').value.trim();
    if(startEntered && endEntered) {
      url += `/${startEntered}/${endEntered}`;
    }
    axios.get(url).then(response => {
      let resultSet = response.data
        .filter(article => {return article.pub_date})
        .map(article => {
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
    let el = e.target;
    axios.post('https://intense-island-98620.herokuapp.com/api/saved', {
      article: this.state.resultSet[parseInt(el.getAttribute('data-index'))]
    }).then(response => {
      console.log(response);
      el.classList.add('saved');
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