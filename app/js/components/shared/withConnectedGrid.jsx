import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withGrid from './withGrid';

const withConnectedGrid = ({ selectors, actions, store }) => (FormComponent) => {
  const { save, fetchRows, getGridOptions } = actions;
  const { formTitle, gridTitle } = selectors;

  const GridComponent = withGrid(gridTitle, formTitle, save)(FormComponent);

  class GridContainer extends Component {
    componentDidMount() {
      const { dispatchFetchedRows } = this.props;
      fetchRows()
        .then(rows => dispatchFetchedRows(rows));
    }

    render() {
      const { rows, toggleFormWindow, isFormWindowOpen } = this.props;
      return (
        <GridComponent
          rows={rows}
          toggleModalWindow={toggleFormWindow}
          isFormWindowOpen={isFormWindowOpen}
          initialGridOptions={getGridOptions(rows)}
        />
      );
    }
  }

  GridContainer.propTypes = {
    dispatchFetchedRows: PropTypes.func.isRequired,
    toggleFormWindow: PropTypes.func.isRequired,
    rows: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.instanceOf(Object),
    ]).isRequired,
    isFormWindowOpen: PropTypes.bool.isRequired,
  };

  return connect(store.selectors, store.actions)(GridContainer);
};

export default withConnectedGrid;
