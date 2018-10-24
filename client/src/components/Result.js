import React from 'react';

const Result = (props) => {
  let buttonText = props.resultSource === 'webAPI' ? 'Save' : 'Delete'; // resultSource == webAPI or database

  return (
    <div className='searchResult' onClick={props.clickSave} data-index={props.index}>
      <div className='noShrink'>
        <span className='dateSpan'>{props.article.date}</span>
      </div>

      <div className='grow'>
        <strong>{props.article.headline}</strong><br />
        {props.article.snippet}
      </div>

      <div className='noShrink'>
        <a href={props.article.url} target='blank'>Go to Article</a>
        <div className='button'>{buttonText}</div>
      </div>
    </div>
  )
}

export default Result;