const GET_ASSIGNED_ASSESSMENTS = 'assessments.GET_ASSIGNED_ASSESSMENTS';
const GET_EDITABLE_ASSESSMENTS = 'assessments.GET_EDITABLE_ASSESSMENTS';
const GET_ASSESSMENTS = 'assessments.GET_ASSESSMENTS';

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
