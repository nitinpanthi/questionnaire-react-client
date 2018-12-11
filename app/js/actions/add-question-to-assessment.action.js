import {
  ADD_QUESTION_TO_ASSESSMENT,
} from './types';

export const addQuestionToAssessment = () => dispatch => {
    fetch('http://localhost:8080/secured/api/assessment/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(createdAssessment => dispatch({
      type: ADD_QUESTION_TO_ASSESSMENT,
      payload: createdAssessment,
    }));
}