import React from 'react';
import { Route } from 'react-router-dom';
import AssessmentsList from './assessment/AssessmentsList';
import Administration from './administration/Administration';

export default function Main() {
  return (
    <main>
      <Route exact path="/" component={AssessmentsList} />
      <Route path="/administration" component={Administration} />
    </main>
  );
}
