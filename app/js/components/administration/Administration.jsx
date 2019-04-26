import React, { Fragment } from 'react';
import Navigation from '../shared/Navigation';
import routes from '../../constants/admin.routes';
import NavigationDisplay from '../shared/NavigationDisplay';

export default function Administration() {
  return (
    <Fragment>
      <Navigation routes={routes} navigationStyle="sub_navigation" />
      <NavigationDisplay routes={routes} />
    </Fragment>
  );
}
