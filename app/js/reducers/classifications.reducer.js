import {
  UPDATE_CLASSIFICATION_LIST,
  TOGGLE_CREATE_CLASSIFICATION_FORM,
} from '../actions/classification.actions';


export const initialState = {
  list: [],
  isFormWindowOpen: false,
  gridOptions: {},
};


export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_CLASSIFICATION_LIST:
      return {
        ...state,
        list: action.value,
      };

    case TOGGLE_CREATE_CLASSIFICATION_FORM:
      return {
        ...state,
        isFormWindowOpen: !state.isFormWindowOpen,
      };

    default:
      return state;
  }
}