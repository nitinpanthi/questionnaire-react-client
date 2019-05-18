import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import InputRenderer from '../../shared/InputValidationsRenderer';
import validateUser from '../../../utils/form_validators/user.form.validator';
import { toggleFormVisibilityActionCreator } from '../../../actions/user.actions';

const UserCreator = ({ handleSubmit, toggleFormWindow, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Fragment>
      <Field name="firstName" label="First Name" component={InputRenderer} />
      <Field name="lastName" label="Last Name" component={InputRenderer} />
      <Field name="email" label="Email" component={InputRenderer} />
      <button type="submit" className="button_active">Submit</button>
      <button type="button" onClick={() => toggleFormWindow()}>Cancel</button>
    </Fragment>
  </form>
);

UserCreator.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toggleFormWindow: PropTypes.func.isRequired,
};

const actions = {
  toggleFormWindow: toggleFormVisibilityActionCreator,
};


export default reduxForm({
  form: 'classificationCreator',
  validate: validateUser,
})(connect(null, actions)(UserCreator));
