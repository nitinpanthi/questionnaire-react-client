import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './navigation/Logo';
import Search from './navigation/Search';
// import MyAssessments from '../assessment/MyAssessments';
import SignInButton from './navigation/SignInButton';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Logo /></li>
        <li><Link to="/">My Assessments</Link></li>
        <li><Link to="/administration">Administration</Link></li>
        <li><Search /></li>
        <li><SignInButton /></li>
      </ul>
    </nav>
  );
}
