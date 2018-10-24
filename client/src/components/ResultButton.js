import React from 'react';

const ResultButton = (props) => {
  let addedClass = '';
  let buttonText = props.resultSource === 'webAPI' ? 'save' : 'delete';
  switch(props.status) {
    case 'saved':
      [addedClass, buttonText] = 'saved';
      break;
    case 'deleted':
      addedClass = 'deleted';
      buttonText = 'Deleted'
      break;
    default:
  }

  return (
    <div 
      className={`button ${addedClass}`} 
      data-index={props.index}
      onClick={props.buttonClick}
    >
      {buttonText}
    </div>
  )
}

export default ResultButton;
