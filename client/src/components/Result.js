import React from 'react';
import {ResultButton} from './index';
import moment from 'moment';

class Result extends React.Component {
  constructor() {
    super();
    this.state = {
      status: 'click',
    }
  }
  
  render() {
    return (
      <div className='searchResult'>
        <div className='noShrink'>
          <span className='dateSpan'>{moment(this.props.article.date).format('MMM Do YYYY')}</span>
        </div>
  
        <div className='grow'>
          <strong>{this.props.article.title}</strong><br />
          {this.props.article.snippet}
        </div>
  
        <div className='noShrink'>
          <a className='button' href={this.props.article.url} target='blank'>Go to Article</a>
          <ResultButton 
            buttonClick={this.props.buttonClick} 
            index={this.props.index}
            resultSource={this.props.resultSource}
            status={this.state.status}
          />
        </div>
      </div>
    )
  }
}

export default Result;