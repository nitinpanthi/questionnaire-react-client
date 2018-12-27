import {
  LOAD_USER,
} from '../actions/types';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  roles: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_USER:
      return action.user;
    default:
      return state;
  }
}
