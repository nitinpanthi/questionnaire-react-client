import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import {
  saveClassification,
  toggleFormVisibilityActionCreator,
} from '../../../actions/classification.actions';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Classification name is required.';
  }
  if (!values.description) {
    errors.description = 'Classification description is required.';
  }
  return errors;
};

const renderInput = ({ input, meta, label }) => (
  <Fragment>
    <label>
      {label}
    </label>
    <input {...input} />
    {meta.error
      && meta.touched
      && (
        <span>
          {meta.error}
        </span>
      )
    }
  </Fragment>
);

const ClassificationCreator = ({ handleSubmit, toggleModalWindow, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Fragment>
      <Field name="name" label="Name" component={renderInput} />
      <Field name="description" label="Description" component={renderInput} />
      <button type="submit" className="button_active">Submit</button>
      <button type="button" onClick={() => toggleModalWindow()}>Cancel</button>
    </Fragment>
  </form>
);

ClassificationCreator.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toggleModalWindow: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  toggleModalWindow: toggleFormVisibilityActionCreator,
};

export default reduxForm({
  form: 'classificationCreator',
  validate,
})(connect(null, mapDispatchToProps)(ClassificationCreator));
