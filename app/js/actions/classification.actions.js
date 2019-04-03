import {
  FETCH_CLASSIFICATIONS,
} from './types';

import {
  create,
  getAll,
  remove,
} from '../services/classification.service';

export const fetchAllClassifications = () => (dispatch) => {
  getAll()
    .then(response => response.json())
    .then(classifications => dispatch({
      type: FETCH_CLASSIFICATIONS,
      classifications,
    }));
};

export const createNewClassification = (classification) => {
  create(classification)
    .then(fetchAllClassifications());
};

export const removeClassification = (name) => {
  remove(name)
    .then(fetchAllClassifications());
};
