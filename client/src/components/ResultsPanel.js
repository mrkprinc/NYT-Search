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
      />
    )
  })

  return (
    <section>
      {results}
    </section>
  )
}

export default ResultsPanel;