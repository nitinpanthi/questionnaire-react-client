import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import ClassificationCreator from './ClassificationCreator';

export default class ClassificationsGrid extends Component {
  constructor(props) {
    super(props);
    const { classifications } = this.props;

    this.state = {
      columnDefs: [
        { headerName: 'ID', field: 'id' },
        { headerName: 'Name', field: 'name' },
        { headerName: 'Description', field: 'description' },
      ],
      rowData: classifications,
    };
  }

  render() {
    const { columnDefs, rowData } = this.state;

    return (
      <section>
        <ClassificationCreator />
        <div
          className="ag-theme-balham"
          style={{
            height: '500px',
          }}
        >
          <AgGridReact columnDefs={columnDefs} rowData={rowData} />
        </div>
      </section>
    );
  }
}

ClassificationsGrid.propTypes = {
  classifications: PropTypes.arrayOf(PropTypes.object).isRequired,
};
