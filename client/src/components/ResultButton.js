import React from 'react';

class ResultButton extends React.Component {

  constructor(props) {
    super(props);
    this.addedClass = '';
    this.buttonText = props.resultSource === 'webAPI' ? 'save' : 'delete';
    this.state = {
      status: 'click'
    }
  }

  clickHandler = e => {
    this.props.buttonClick(e);
    this.setState({status: 'done'});
  }

  render() {
    switch(this.state.status) {
      case 'done':
        [this.addedClass, this.buttonText] = 
          this.props.resultSource === 'webAPI' ? ['saved', 'saved'] : ['deleted', 'deleted'];
        break;
      default:
    }
  
    return (
      <div 
        className={`button ${this.addedClass}`} 
        data-index={this.props.index}
        onClick={this.clickHandler}
      >
        {this.buttonText}
      </div>
    )
  }
}

export default ResultButton;
