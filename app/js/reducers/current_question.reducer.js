const CREATE_QUESTION = 'currentQuestion.CREATE_QUESTION';
const LOAD_EDITABLE_QUESTION = 'currentQuestion.LOAD_EDITABLE_QUESTION';
const SAVE_QUESTION = 'currentQuestion.SAVE_QUESTION';
const LOAD_VIEWABLE_QUESTION = 'currentQuestion.LOAD_VIEWABLE_QUESTION';
const SUBMIT_QUESTION_ATTEMPT = 'currentQuestion.SUBMIT_QUESTION_ATTEMPT';

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
