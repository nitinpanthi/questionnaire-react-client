import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import {
  toggleFormVisibilityActionCreator,
} from '../../../actions/classification.actions';

import validateClassification from '../../../validators/classification.form.validator';
import InputRenderer from '../../shared/FormInputRenderer';

const ClassificationCreator = ({ handleSubmit, toggleModalWindow, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Fragment>
      <Field name="name" label="Name" component={InputRenderer} />
      <Field name="description" label="Description" component={InputRenderer} />
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
  validate: validateClassification,
})(connect(null, mapDispatchToProps)(ClassificationCreator));
