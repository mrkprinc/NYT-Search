import React from 'react';
import {ResultsPanel} from './index';
import axios from 'axios';

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
  }

  render() {
    console.log(this.state.dataSet)
    return (
      <ResultsPanel resultSet={this.state.dataSet} resultSource='db' />
    )
  }
}

export default SavedPage;