import React from 'react';
import { Route } from 'react-router-dom';

import ClassificationsGridContainer from './classification/ClassificationsGridContainer';
import AssessmentsGrid from './assessment/AssessmentsGrid';
import AssessmentCreator from './assessment/AssessmentCreator';
import Users from './user/Users';

export default function AdministrationDisplay() {
  return (
    <div>
      <Route exact path="/administration/classifications" component={ClassificationsGridContainer} />
      <Route exact path="/administration/assessments" component={AssessmentsGrid} />
      <Route exact path="/administration/assessments/new" component={AssessmentCreator} />
      <Route exact path="/administration/users" component={Users} />
    </div>
  );
}
