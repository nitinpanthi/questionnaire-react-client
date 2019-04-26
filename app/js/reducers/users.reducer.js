import {
  UPDATE_USER_LIST,
  TOGGLE_CREATE_USER_FORM,
} from '../actions/user.actions';


export const initialState = {
  list: [],
  isFormWindowOpen: false,
  gridOptions: {},
};


export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_LIST:
      return {
        ...state,
        list: action.value,
      };

    case TOGGLE_CREATE_USER_FORM:
      return {
        ...state,
        isFormWindowOpen: !state.isFormWindowOpen,
      };

    default:
      return state;
  }
}