import React, { Component, Fragment } from 'react';
import { Form, Text } from 'informed';
import { IoIosAdd } from 'react-icons/io';

import { createNewClassification } from '../../../actions/classification.actions';

class ClassificationCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    };
  }

  toggleFormState() {
    this.setState(previousState => ({
      isHidden: !previousState.isHidden,
      classification: previousState.classification,
    }));
  }

  render() {
    const { isHidden } = this.state;

    return (
      <Form id="classification-creator">
        {({ formState }) => (
          <Fragment>
            {
              isHidden === true
                ? (
                  <Fragment>
                    <label htmlFor="name">Name:</label>
                    <Text field="name" id="classification-name" />
                    <label htmlFor="description">Description:</label>
                    <Text field="description" id="classification-description" />
                    <button type="button" onClick={() => createNewClassification(formState.values)()}>Submit</button>
                    <button type="button" onClick={this.toggleFormState.bind(this)}>Cancel</button>
                  </Fragment>
                )
                : (
                  <button type="button" onClick={this.toggleFormState.bind(this)} className="button_active">
                    <IoIosAdd />
                    Create New Classification
                  </button>
                )
            }
          </Fragment>
        )}
      </Form>
    );
  }
}

export default ClassificationCreator;
