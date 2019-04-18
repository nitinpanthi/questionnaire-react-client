import AssessmentsList from '../components/assessment/AssessmentsList';
import Administration from '../components/administration/Administration';

const routes = [
  {
    label: 'My Assessments',
    path: '/',
    exact: true,
    component: AssessmentsList,
  },
  {
    label: 'Administration',
    path: '/administration',
    exact: false,
    component: Administration,
  },
];

export default routes;
