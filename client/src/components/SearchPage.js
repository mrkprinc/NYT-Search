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
            title: article.headline.main,
            snippet: article.snippet,
            date: article.pub_date,
            url: article.web_url,
            active: 1
          }
        })
      this.setState({ resultSet });
    });
  }

  clickSave = e => {
    let el = e.target;
    console.log('click');
    console.log(this.state.resultSet[parseInt(el.getAttribute('data-index'))])
    fetch('https://intense-island-98620.herokuapp.com/api/saved', {
      method: "POST", 
      mode: "no-cors", // no-cors, cors, *same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, same-origin, *omit
      headers: {
          "Content-Type": "application/json; charset=utf-8",
          // "Content-Type": "application/x-www-form-urlencoded",
      },
      // redirect: "follow", // manual, *follow, error
      // referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(this.state.resultSet[parseInt(el.getAttribute('data-index'))]) // body data type must match "Content-Type" header
  })
    // axios({
    //   method: 'POST',
    //   url: 'https://intense-island-98620.herokuapp.com/api/saved',
    //   data: this.state.resultSet[parseInt(el.getAttribute('data-index'))]
    // })
    //   // .post('https://intense-island-98620.herokuapp.com/api/saved', this.state.resultSet[parseInt(el.getAttribute('data-index'))])
    //   .then(response => {
    //     console.log(response)
    //     el.classList.add('saved');
    //   })
    //   .catch(err => console.log(err));
  }

  render() {
    if(this.state.displayResults) {
      return (
        <main>
          <SearchBox clickSearch={this.clickSearch} key={0} />
          <ResultsPanel 
            resultSet={this.state.resultSet} 
            resultSource={'webAPI'} 
            buttonClick={this.clickSave} 
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