import React from 'react';
import {Result} from './index';

const ResultsPanel = (props) => {
  let results = props.resultSet.map((article, i) => {
    return (
      <Result 
        article={article} 
        resultSource={props.resultSource}
        clickSave={props.clickSave} 
        key={article._id}
        index={i}
      />
    )
  })

  return (
    <section className='resultsPanel'>
      {results}
    </section>
  )
}

export default ResultsPanel;