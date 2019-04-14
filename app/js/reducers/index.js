import {
  combineReducers,
} from 'redux';

import { reducer as formReducer } from 'redux-form';


import classificationsReducer from './classifications.reducer';
import assessmentsReducer from './assessments.reducer';
import currentAssessmentReducer from './current_assessment.reducer';
import currentQuestionReducer from './current_question.reducer';
import profileReducer from './profile.reducer';

export default combineReducers({
  classifications: classificationsReducer,
  assessments: assessmentsReducer,
  currentAssessment: currentAssessmentReducer,
  currentQuestion: currentQuestionReducer,
  profile: profileReducer,
  form: formReducer,
});
