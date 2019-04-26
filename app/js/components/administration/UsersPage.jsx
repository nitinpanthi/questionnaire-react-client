import {
  updateUserListActionCreator,
  toggleFormVisibilityActionCreator,
  fetchUsers,
  saveUser,
} from '../../actions/user.actions';

import withConnectedGrid from '../shared/withConnectedGrid';
import UserCreator from './forms/UserCreator';
import { getUserGridOptions } from '../../constants/user.constants';

const storeActions = {
  dispatchFetchedRows: updateUserListActionCreator,
  toggleFormWindow: toggleFormVisibilityActionCreator,
};

const storeSelectors = state => ({
  rows: state.users.list,
  isFormWindowOpen: state.users.isFormWindowOpen,
});

export default withConnectedGrid(
  {
    actions: {
      save: saveUser,
      fetchRows: fetchUsers,
      getGridOptions: getUserGridOptions,
    },
    selectors: {
      formTitle: 'New User',
      gridTitle: 'Users',
    },
    store: {
      selectors: storeSelectors,
      actions: storeActions,
    },
  },
)(UserCreator);
