import React from 'react';
import { Route } from 'react-router-dom';

import Classifications from './classification/Classifications';
import Assessments from './Assessments';
import Users from './Users';

export default function AdministrationDisplay() {
  return (
    <div>
      <Route exact path="/administration/classifications" component={Classifications} />
      <Route exact path="/administration/assessments" component={Assessments} />
      <Route exact path="/administration/users" component={Users} />
    </div>
  );
}
