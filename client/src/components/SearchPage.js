import React from 'react';
import {SearchBox, ResultsPanel} from './index';

class SearchPage extends React.Component {
  state = {
    // TEMP
    displayResults: true,
    resultSet: []
  }

  constructor() {
    super()
    this.clickSearch = this.clickSearch.bind(this);
  }

  clickSearch = (e) => {
    e.preventDefault();
    console.log('click');
  }

  render() {
    let content = [
      <SearchBox clickSearch={this.clickSearch} key={0} />
    ]
    if(this.state.displayResults) {
      content.push(
        <ResultsPanel resultSet={this.resultSet} key={1} />
      )
    }

    return (
      <main>
        {content}
      </main>
    )
  }
}

export default SearchPage;