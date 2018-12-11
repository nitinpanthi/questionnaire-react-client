import React, { Component } from 'react';

export default class ClassificationCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <div>
        <input type="text" name="classification_name" id="classification_name" />
        <button>Create</button>
        <button>Cancel</button>
      </div>
    )
  }
}
