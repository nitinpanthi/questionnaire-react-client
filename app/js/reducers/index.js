import {
  combineReducers,
} from 'redux';

import classificationsReducer from './classifications.reducer';
import myAssessmentReducer from './my_assessments.reducer';
import currentAssessmentReducer from './current_assessment.reducer';
import currentQuestionReducer from './current_question.reducer';
import profileReducer from './profile.reducer';

export default combineReducers({
  classifications: classificationsReducer,
  myAssessments: myAssessmentReducer,
  currentAssessment: currentAssessmentReducer,
  currentQuestion: currentQuestionReducer,
  profile: profileReducer,
});
