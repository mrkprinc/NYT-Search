import React from 'react';
import {ResultsPanel} from './index';

class SavedPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSet: []
    }
  }

  componentDidMount() {
    fetch('https://intense-island-98620.herokuapp.com/api/saved')
      .then(response => {
        return response.json();
      })
      .then(dataSet => {
        this.setState({ dataSet });
      })
      .catch(err => console.log(err));
  }

  clickDelete = e => {
    let el = e.target;
    let url = 'https://intense-island-98620.herokuapp.com/api/saved/remove/';
    url += this.state.dataSet[parseInt(el.getAttribute('data-index'))].articleId;
    fetch(url, {method: 'PUT'})
      .then(response => {
        console.log(response);
        return response;
      })
  }

  render() {
    console.log(this.state.dataSet)
    return (
      <ResultsPanel resultSet={this.state.dataSet} resultSource='db' buttonClick={this.clickDelete} />
    )
  }
}

export default SavedPage;