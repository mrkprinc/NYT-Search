import React from 'react';
import moment from 'moment';

const Result = (props) => {
  let buttonText = props.resultSource === 'webAPI' ? 'Save' : 'Delete'; // resultSource == webAPI or db
  return (
    <div className='searchResult'>
      <div className='noShrink'>
        <span className='dateSpan'>{moment(props.article.date).format('MMM Do YYYY')}</span>
      </div>

      <div className='grow'>
        <strong>{props.article.title}</strong><br />
        {props.article.snippet}
      </div>

      <div className='noShrink'>
        <a href={props.article.url} target='blank'>Go to Article</a>
        <div className='button' onClick={props.buttonClick} data-index={props.index}>{buttonText}</div>
      </div>
    </div>
  )
}

export default Result;