import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  updateClassificationListActionCreator,
  toggleFormVisibilityActionCreator,
  fetchClassifications,
} from '../../../actions/classification.actions';
import ClassificationsGrid from './ClassificationsGrid';

class ClassificationsGridContainer extends Component {
  componentDidMount() {
    const { dispatchClassifications } = this.props;
    fetchClassifications()
      .then(classifications => dispatchClassifications(classifications));
  }

  render() {
    const { classifications, toggleModalWindow, isModalWindowOpen } = this.props;
    return (
      <ClassificationsGrid
        classifications={classifications}
        toggleModalWindow={toggleModalWindow}
        isModalWindowOpen={isModalWindowOpen}
      />
    );
  }
}

ClassificationsGridContainer.propTypes = {
  dispatchClassifications: PropTypes.func.isRequired,
  toggleModalWindow: PropTypes.func.isRequired,
  classifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  isModalWindowOpen: PropTypes.bool.isRequired,
};

const mapDispatch = {
  dispatchClassifications: updateClassificationListActionCreator,
  toggleModalWindow: toggleFormVisibilityActionCreator,
};

const mapState = state => ({
  classifications: state.classifications.list,
  isModalWindowOpen: state.classifications.isCreateClassificationFormOpen,
});

export default connect(mapState, mapDispatch)(ClassificationsGridContainer);
