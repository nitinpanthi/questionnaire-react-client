import React, { Component } from 'react'
import PropTypes from 'prop-types';

import AssessmentsGrid from './AssessmentsGrid';
import { dispatchAfterGettingEditableAssessments } from '../../../actions/assessment.actions';

export default class AssessmentsGridContainer extends Component {
  componentDidMount() {
    const { dispatchToStore } = this.props;
    dispatchToStore();
  }

  render() {
    const { assessments } = this.props;
    return (
      <AssessmentsGrid assessments={assessments} />
    )
  }
}

AssessmentsGridContainer.propTypes = {
  dispatchToStore: PropTypes.func.isRequired,
  assessments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatch = {
  dispatchToStore: dispatchAfterGettingEditableAssessments,
};

const mapState = state => ({assessments: state.assessments})