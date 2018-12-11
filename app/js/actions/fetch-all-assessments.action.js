  import {
  CREATE_ASSESSMENT,
  GET_ASSIGNED_ASSESSMENTS,
  GET_EDITABLE_ASSESSMENTS,
  LOAD_ASSESSMENT,
} from './types';

export const createAssessment = () => dispatch => {
    fetch('http://localhost:8080/secured/api/assessment/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(createdAssessment => dispatch({
      type: CREATE_ASSESSMENT,
      payload: createdAssessment,
    }));
}