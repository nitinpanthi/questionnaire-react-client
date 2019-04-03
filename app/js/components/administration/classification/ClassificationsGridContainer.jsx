import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchAllClassifications } from '../../../actions/classification.actions';
import ClassificationsGrid from './ClassificationsGrid';

class ClassificationsGridContainer extends Component {
  componentDidMount() {
    const { fetchAndDispatchAllClassifications } = this.props;
    fetchAndDispatchAllClassifications();
  }

  render() {
    const { classifications } = this.props;
    return (
      classifications && classifications.length !== 0
        ? <ClassificationsGrid classifications={classifications} />
        : null
    );
  }
}

ClassificationsGridContainer.propTypes = {
  fetchAndDispatchAllClassifications: PropTypes.func.isRequired,
  classifications: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatch = {
  fetchAndDispatchAllClassifications: fetchAllClassifications,
};

const mapState = state => ({ classifications: state.classifications });
export default connect(mapState, mapDispatch)(ClassificationsGridContainer);
