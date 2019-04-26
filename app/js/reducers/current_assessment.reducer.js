const CREATE_ASSESSMENT = 'currentAssessment.CREATE_ASSESSMENT';
const ADD_QUESTION_TO_ASSESSMENT = 'currentAssessment.ADD_QUESTION_TO_ASSESSMENT';
const LOAD_ASSESSMENT = 'currentAssessment.LOAD_ASSESSMENT';
const SUBMIT_ASSESSMENT = 'currentAssessment.SUBMIT_ASSESSMENT';

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
