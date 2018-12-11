import React from 'react';
import AdministrationNavigator from './AdministrationNavigator';
import AdministrationDisplay from './AdministrationDisplay';

export default function Administration() {
  return (
    <div>
      <AdministrationNavigator />
      <AdministrationDisplay />
    </div>
  );
}
