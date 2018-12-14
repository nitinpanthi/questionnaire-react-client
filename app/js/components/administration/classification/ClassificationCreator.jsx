import React, { Component } from 'react';
import { createNewClassification, fetchAllClassifications } from '../../../actions/classifications.action';

class ClassificationCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      classification: {
        name: '',
        description: '',
      },
    };
  }

  componentWillMount() {
    fetchAllClassifications();
  }

  onTextChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  toggleState() {
    this.setState(previousState => ({
      isHidden: !previousState.isHidden,
      name: previousState.name,
      description: previousState.description,
    }));
  }

  render() {
    const { classification } = this.state;

    const createNewClassificationButton = () => (<button type="button" onClick={this.toggleState.bind(this)}>Create New Classification</button>);

    const getCreator = () => (
      <form onSubmit={createNewClassification(classification)}>
        <input type="text" name="classification_name" value={classification.name} onChange={this.onTextChange.bind(this)} />
        <input type="text" name="classification_description" value={classification.description} onChange={this.onTextChange.bind(this)} />
        <input type="submit" name="classification_submit" />
        <button type="button" onClick={this.toggleState.bind(this)}>Cancel</button>
      </form>
    );

    const { isHidden } = this.state;
    return isHidden ? createNewClassificationButton() : getCreator();
  }
}

export default ClassificationCreator;
