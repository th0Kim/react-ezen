import React, { Component } from 'react';

class RefSample extends Component {
  refnaming = React.createRef();

  handleFocus = () => {
    this.refnaming.current.focus();
  }

  render() {
    return (
      <div>
        <input ref={(this.refnaming)} />
      </div> 
    );
  }
}

export default RefSample;