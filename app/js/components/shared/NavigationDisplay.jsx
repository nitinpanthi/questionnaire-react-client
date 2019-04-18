import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const NavigationDisplay = ({ routes }) => (
  <Fragment>
    {routes.map(
      route => <Route key={route.label} exact={route.exact} path={route.path} component={route.component} />,
    )}
  </Fragment>
);

NavigationDisplay.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavigationDisplay;
