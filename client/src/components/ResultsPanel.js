import React from 'react';
import {Result} from './index';

const ResultsPanel = (props) => {
  let results;
  if(props.resultSet.length) {
    results = props.resultSet.map((article, i) => {
      return (
        <Result 
          article={article} 
          resultSource={props.resultSource}
          clickSave={props.clickSave || ''}
          clickDelete={props.clickDelete || ''}
          key={article._id}
          index={i}
        />
      )
    })
  } else results = (
    <div>
      <span className='spin'>✰</span>
      <span>Retrieving articles...</span>
    </div>
  )

  return (
    <section className='resultsPanel'>
      {results}
    </section>
  )
}

export default ResultsPanel;