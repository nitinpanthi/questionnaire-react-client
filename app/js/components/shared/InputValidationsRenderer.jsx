import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const InputValidationsRenderer = ({ input, meta, label }) => (
  <Fragment>
    <label>
      {label}
    </label>
    <input {...input} />
    {
      meta.error
      && meta.touched
      && (
        <span>
          {meta.error}
        </span>
      )
    }
  </Fragment>
);

InputValidationsRenderer.propTypes = {
  input: PropTypes.instanceOf(Object).isRequired,
  meta: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
};

export default InputValidationsRenderer;
