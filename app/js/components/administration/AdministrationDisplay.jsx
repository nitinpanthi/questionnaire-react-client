import React from 'react';
import { Route } from 'react-router-dom';

import Classifications from './Classifications';
import Assessments from './Assessments';
import Users from './Users';

export default function AdministrationDisplay() {
  return (
    <div>
      <Route exact path="/administration/classification"><Classifications /></Route>
      <Route exact path="/administration/assessments"><Assessments /></Route>
      <Route exact path="/administration/users"><Users /></Route>
    </div>
  );
}
