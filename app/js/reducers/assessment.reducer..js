import {
  CREATE_ASSESSMENT,
  GET_ASSIGNED_ASSESSMENTS,
  GET_EDITABLE_ASSESSMENTS,
  LOAD_ASSESSMENT,
} from '../actions/types';

const initialState = {
  assessments: [],
  currentAssessment: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_ASSESSMENT:
    case GET_ASSIGNED_ASSESSMENTS:
    case GET_EDITABLE_ASSESSMENTS:
    case LOAD_ASSESSMENT:
    default:
      return state;
  }
}
