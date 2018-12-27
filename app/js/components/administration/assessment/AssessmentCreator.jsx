import React, { Component } from 'react';
import { Form, Text } from 'informed';
import { createNewClassification } from '../../../actions/classification.actions';


class UserCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      assessment: {
        title: '',
        description: '',
        createdOn: '',
        lastUpdatedOn: '',
        language: 'English',
        difficultyLevel: 'EASY',
        classifications: [],
        questions: [],
        passingScore: 0,
        createdBy: '',
      },
    };
  }

  onTextChange(event) {
    this.setState({ user: { [event.target.name]: event.target.value } });
  }

  onSubmit(event) {
    const { user } = this.state;
    event.preventDefault();
    createNewClassification(user);
  }

  toggleState() {
    this.setState(previousState => ({
      isHidden: !previousState.isHidden,
      name: previousState.name,
      description: previousState.description,
    }));
  }

  render() {
    const createNewUserButton = () => (<button type="button" onClick={() => this.toggleState()}>Create New User</button>);

    const getCreator = () => (
      <Form id="assessmentCreator">
        <label htmlFor="title">Title:</label>
        <Text field="title" id="title" />
        <label htmlFor="description">Last Name:</label>
        <Text field="description" id="description" />
        <label htmlFor="email">Email :</label>
        <Text field="email" id="email" />
        <button type="submit" onSubmit={event => this.onSubmit(event)}>Submit</button>
        <button type="button" onClick={() => this.toggleState()}>Cancel</button>
      </Form>
    );

    const { isHidden } = this.state;
    return isHidden ? createNewUserButton() : getCreator();
  }
}

export default UserCreator;
