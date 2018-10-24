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
    axios
      .get('https://intense-island-98620.herokuapp.com/api/saved')
      .then(response => {
        console.log(response);
        this.setState({ dataSet: response.data })
      })
  }

  render() {
    return (
      <ResultsPanel resultSet={this.state.dataSet} resultSource='db' />
    )
  }
}

export default SavedPage;