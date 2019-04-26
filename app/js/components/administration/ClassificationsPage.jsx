import React from 'react';

import {
  updateClassificationListActionCreator,
  toggleFormVisibilityActionCreator,
  fetchClassifications,
  saveClassification,
} from '../../actions/classification.actions';

import withConnectedGrid from '../shared/WithGridContainer';
import ClassificationCreator from './forms/ClassificationCreator';
import { getClassificationGridOptions } from '../../constants/classification.constants';

const storeActions = {
  dispatchFetchedRows: updateClassificationListActionCreator,
  toggleFormWindow: toggleFormVisibilityActionCreator,
};

const storeSelectors = state => ({
  rows: state.classifications.list,
  isFormWindowOpen: state.classifications.isCreateClassificationFormOpen,
});

export default withConnectedGrid(
  {
    actions: {
      save: saveClassification,
      fetchRows: fetchClassifications,
      getGridOptions: getClassificationGridOptions,
    },
    selectors: {
      formTitle: 'New Classification',
      gridTitle: 'Classifications',
    },
    store: {
      selectors: storeSelectors,
      actions: storeActions,
    },
  },
)(ClassificationCreator);
