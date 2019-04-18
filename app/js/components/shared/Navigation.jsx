import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = ({ routes, children, navigationStyle }) => (
  <nav className={navigationStyle}>
    <ul>
      {routes.map(route => <li key={route.label}><Link to={route.path}>{route.label}</Link></li>)}
      {children.map((child, index) => <li key={index}>{child}</li>)}
    </ul>
  </nav>
);

Navigation.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.instanceOf(Object),
  navigationStyle: PropTypes.string,
};

Navigation.defaultProps = {
  children: [],
  navigationStyle: '',
};

export default Navigation;
