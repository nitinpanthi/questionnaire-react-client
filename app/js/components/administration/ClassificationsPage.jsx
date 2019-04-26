import {
  updateClassificationListActionCreator,
  toggleFormVisibilityActionCreator,
  fetchClassifications,
  saveClassification,
} from '../../actions/classification.actions';

import withConnectedGrid from '../shared/withConnectedGrid';
import ClassificationCreator from './forms/ClassificationCreator';
import { getClassificationGridOptions } from '../../constants/classification.constants';

const storeActions = {
  dispatchFetchedRows: updateClassificationListActionCreator,
  toggleFormWindow: toggleFormVisibilityActionCreator,
};

const storeSelectors = state => ({
  rows: state.classifications.list,
  isFormWindowOpen: state.classifications.isFormWindowOpen,
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
