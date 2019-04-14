import React from 'react';
import { Link } from 'react-router-dom';

export default function Administration() {
  return (
    <div className="sub_navigation">
      <ul>
        <li><Link to="/administration/classifications">Classifications</Link></li>
        <li><Link to="/administration/assessments">Assessments</Link></li>
        <li><Link to="/administration/users">Users</Link></li>
      </ul>
    </div>
  );
}
