import React, { Component } from 'react';

class RefSample extends Component {
  input = React.createRef();

  render() {
    return (
      <div>
        <input ref={(this.input)} />
      </div> 
    );
  }
}

export default RefSample;