  import {
  GET_ASSIGNED_ASSESSMENTS,
  GET_EDITABLE_ASSESSMENTS,
  GET_ASSESSMENTS,
} from '../actions/types';

const initialState = {
  viewable: [],
  editable: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ASSIGNED_ASSESSMENTS:
    case GET_EDITABLE_ASSESSMENTS:
    case GET_ASSESSMENTS:
    default:
      return state;
  }
}
