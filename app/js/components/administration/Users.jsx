import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { headerName: 'Name', field: 'name' },
        { headerName: 'Description', field: 'description' },
      ],
      rowData: [
        { name: 'Toyota', description: 'Celica' },
        { name: 'Ford', description: 'Mondeo' },
      ],
    };
  }

  render() {
    const { columnDefs, rowData } = this.state;

    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '500px',
          width: '600px',
        }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
        />
      </div>
    );
  }
}
