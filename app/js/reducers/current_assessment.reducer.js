import {
  CREATE_ASSESSMENT,
  ADD_QUESTION_TO_ASSESSMENT,
  LOAD_ASSESSMENT,
  SUBMIT_ASSESSMENT,
} from '../actions/types';

const initialState = {
  title: '',
  description: '',
  createdOn: '',
  lastUpdatedOn: '',
  language: 'English',
  difficultyLevel: 'EASY',
  classifications: [],
  questions: [],
  passingScore: 0,
  createdBy: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_ASSESSMENT:
    case SUBMIT_ASSESSMENT:
    case CREATE_ASSESSMENT:
    case ADD_QUESTION_TO_ASSESSMENT:
    default:
      return state;
  }
}
