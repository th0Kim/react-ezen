import React, { Component } from 'react';

class EventPractice_c extends Component {
  render() {
    return (
      <div>
        <h4>이벤트 연습</h4>
        <input
          type="text"
          name="massage"
          placeholder="아무거나 입력해 보세요"
          onChange={(e) => {
            console.log(e); //SyntheticBaseEvent
          }}
        />
      </div>
    );
  }
}

export default EventPractice_c;