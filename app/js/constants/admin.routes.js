import ClassificationsGridContainer from '../components/administration/classification/ClassificationsGridContainer';
import AssessmentCreator from '../components/administration/assessment/AssessmentCreator';
import Users from '../components/administration/user/Users';

const routes = [
  {
    label: 'Classifications',
    path: '/administration/classifications',
    exact: true,
    component: ClassificationsGridContainer,
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
    component: Users,
  },
];

export default routes;
