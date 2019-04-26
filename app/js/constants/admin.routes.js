import ClassificationsPage from '../components/administration/ClassificationsPage';
import AssessmentCreator from '../components/administration/assessment/AssessmentCreator';
import UsersPage from '../components/administration/UsersPage';

const routes = [
  {
    label: 'Classifications',
    path: '/administration/classifications',
    exact: true,
    component: ClassificationsPage,
  },
  {
    label: 'Assessments',
    path: '/administration/assessments',
    exact: true,
    component: AssessmentCreator,
  },
  {
    label: 'Users',
    path: '/administration/users',
    exact: true,
    component: UsersPage,
  },
];

export default routes;
