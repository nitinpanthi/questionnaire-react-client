import React from 'react';
import { Route } from 'react-router-dom';
import MyAssessments from './assessment/MyAssessments';
import Administration from './administration/Administration';

export default function Main() {
  return (
    <section>
      <Route exact path="/" component={MyAssessments} />
      <Route path="/administration" component={Administration} />
    </section>
  );
}
