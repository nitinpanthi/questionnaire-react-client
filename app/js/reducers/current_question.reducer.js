import {
  CREATE_QUESTION,
  LOAD_EDITABLE_QUESTION,
  SAVE_QUESTION,
  LOAD_VIEWABLE_QUESTION,
  SUBMIT_QUESTION_ATTEMPT,
} from '../actions/types';

const initialState = {
  title: '',
  description: '',
  options: [],
  correctAnswers: [],
  classifications: [],
  difficultyLevel: 'EASY',
  language: 'English',
  createdOn: '',
  createdBy: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_QUESTION:
    case LOAD_EDITABLE_QUESTION:
    case SAVE_QUESTION:
    case LOAD_VIEWABLE_QUESTION:
    case SUBMIT_QUESTION_ATTEMPT:
    default:
      return state;
  }
}
