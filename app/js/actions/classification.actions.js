import {
  create,
  getAll,
  remove,
} from '../services/classification.service';

import store from '../store';

export const UPDATE_CLASSIFICATION_LIST = 'classification.UPDATE_CLASSIFICATION_LIST';
export const TOGGLE_CREATE_CLASSIFICATION_FORM = 'classification.TOGGLE_CREATE_CLASSIFICATION_FORM';
export const UPDATE_GRID_OPTIONS = 'classification.UPDATE_GRID_OPTIONS';

export const toggleFormVisibilityActionCreator = () => ({
  type: TOGGLE_CREATE_CLASSIFICATION_FORM,
});

export const updateClassificationListActionCreator = classifications => ({
  type: UPDATE_CLASSIFICATION_LIST,
  value: classifications,
});

export const dispatchGridOptionsActionCreator = options => ({
  type: UPDATE_GRID_OPTIONS,
  value: options,
});

export const fetchClassifications = () => getAll()
  .then(response => response.json());

export const saveClassification = classification => create(classification)
  .then(fetchClassifications)
  .then(store.dispatch(toggleFormVisibilityActionCreator()));

export const deleteClassification = name => remove(name)
  .then(fetchClassifications)
  .then(classifications => new Promise((resolve) => {
    store.dispatch(updateClassificationListActionCreator(classifications));
    resolve(classifications);
  }));
