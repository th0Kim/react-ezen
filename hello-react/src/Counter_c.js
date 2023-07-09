import React, { Component } from 'react';

class Counter_c extends Component {
  constructor(props) {
    super(props);
    // console.log(this)
    this.state = {
      number: 0,
    }
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <h4>{number}</h4>
        <button onClick={() => {this.setState({ number: number + 1 });}}>
          +1
        </button>
      </div>
    )
  }
}

export default Counter_c;
