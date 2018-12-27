import React, { Component } from 'react';
import { Form, Text } from 'informed';
import { createUser } from '../../../actions/user.actions';


class UserCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      user: {
        firstName: '',
        lastName: '',
        email: '',
      },
    };
  }

  onTextChange(event) {
    this.setState({ user: { [event.target.name]: event.target.value } });
  }

  onSubmit(event) {
    const { user } = this.state;
    event.preventDefault();
    createUser(user);
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
      <Form id="user-creator">
        <label htmlFor="first-name">First name:</label>
        <Text field="firstName" id="first-name" />
        <label htmlFor="last-name">Last Name:</label>
        <Text field="lastName" id="last-name" />
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
