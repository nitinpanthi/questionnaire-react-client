import {
  combineReducers,
} from 'redux';
import assessmentReducer from './assessment.reducer.';

export default combineReducers({
  posts: assessmentReducer,
});
