import React from 'react';
import { Route } from 'react-router-dom';

import Classifications from './classification/Classifications';
import Assessments from './assessment/Assessments';
import AssessmentCreator from './assessment/AssessmentCreator';
import Users from './user/Users';

export default function AdministrationDisplay() {
  return (
    <div>
      <Route exact path="/administration/classifications" component={Classifications} />
      <Route exact path="/administration/assessments" component={Assessments} />
      <Route exact path="/administration/assessments/new" component={AssessmentCreator} />
      <Route exact path="/administration/users" component={Users} />
    </div>
  );
}
