import React from 'react';

const Result = (props) => {
  let buttonText = props.resultSource === 'webAPI' ? 'Save' : 'Delete'; // resultSource == webAPI or database

  return (
    <div className='searchResult' onClick={props.clickSave}>
      <strong>{props.article.headline}</strong>
      <span>{props.article.snippet}</span>
      <span>{props.article.date}</span>
      <a href={props.article.url} target='blank'>Go to Article</a>
      <div className='button'>{buttonText}</div>
    </div>
  )
}

export default Result;