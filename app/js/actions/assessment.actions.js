import {
  CREATE_ASSESSMENT,
  GET_ASSESSMENTS,
  GET_READ_ONLY_ASSESSMENTS,
  GET_EDITABLE_ASSESSMENTS,
} from './types';

import {
  getEditableAssessments,
  getReadOnlyAssessments,
  getAll,
  get,
  create,
  remove
} from '../services/assessment.service';

export const dispatchAfterGettingAssessments = (getter, actionType) => (dispatch) => {
  getter()
    .then(response => response.json())
    .then(classifications => dispatch({
      type: actionType,
      classifications,
    }));
};

export const dispatchAfterGettingEditableAssessments = () => {
  dispatchAfterGettingAssessments(getEditableAssessments, GET_EDITABLE_ASSESSMENTS);
};

export const dispatchAfterGettingReadOnlyAssessments = () => {
  dispatchAfterGettingAssessments(getReadOnlyAssessments, GET_READ_ONLY_ASSESSMENTS);
};

export const dispatchAfterGettingAllAssessments = () => {
  dispatchAfterGettingAssessments(getAll, GET_ASSESSMENTS);
};

export const getAssessment = () => {
  
}


export const createAssessment = assessment => (dispatch) => {

}

export const createNewClassification = (classification) => {
  create(classification);
    // .then(fetchAllClassifications());
};
