import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import ClassificationCreator from './ClassificationCreator';
import { fetchAllClassifications } from '../../../actions/classification.actions';

class Classifications extends Component {
  constructor(props) {
    super(props);
    const { classifications } = this.props;

    this.state = {
      columnDefs: [
        { headerName: 'Name', field: 'name' },
        { headerName: 'Description', field: 'description' },
      ],
      rowData: classifications,
    };
  }

  componentWillMount() {
    fetchAllClassifications();
  }

  render() {
    const { columnDefs, rowData } = this.state;

    return (
      <section>
        <ClassificationCreator />
        <div className="ag-theme-balham">
          <AgGridReact columnDefs={columnDefs} rowData={rowData} />
        </div>
      </section>
    );
  }
}

Classifications.propTypes = {
  classifications: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatch = (dispatch) => ({
  onLoadClassifications: () => {
    dispatch(fetchAllClassifications());
  }
});

const mapState = state => ({ classifications: state.classifications });

export default connect(mapState, mapDispatch)(Classifications);
