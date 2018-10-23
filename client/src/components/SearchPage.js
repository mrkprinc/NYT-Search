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
    // axios.get('https://intense-island-98620.herokuapp.com/api', {
    //   params: {
    //     query: document.getElementById('txtTopic').value.trim(),
    //     startDate: document.getElementById('txtStartDate').value.trim(),
    //     endDate: document.getElementById('txtEndDate').value.trim()
    //   }
    // }).then(response => console.log(response));
    this.setState({
      displayResults: true,
      // TEMP
      resultSet: [{
        _id: 4,
        headline: 'Test Head',
        snippet: 'this is the story that happened',
        date: 'on this day',
        url: 'https://google.ca'
      }]
    });
  }

  clickSave = e => {
    // save using this.state.resultSet[index]
    e.target.classList.add('saved');
  }

  render() {
    if(this.state.displayResults) {
      return (
        <main>
          <SearchBox clickSearch={this.clickSearch} key={0} />,
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