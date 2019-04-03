import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete as DeleteIcon } from 'react-icons/md';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import ClassificationCreator from './ClassificationCreator';
import { removeClassification } from '../../../actions/classification.actions';
import { administrationColumnDefs } from '../../../constants/classification.constants';

const actionsCellRenderer = params => (
  <div>
    <button type="button" onClick={() => removeClassification(params.value)}><DeleteIcon /></button>
  </div>
);

const ClassificationsGrid = ({ classifications }) => {
  const gridOptions = {
    columnDefs: administrationColumnDefs,
    rowData: classifications,
    frameworkComponents: {
      actionsCellRenderer,
    },
  };

  return (
    <section>
      <ClassificationCreator />
      <div
        className="ag-theme-balham"
        style={{
          height: '500px',
        }}
      >
        <AgGridReact gridOptions={gridOptions} />
      </div>
    </section>
  );
};

ClassificationsGrid.propTypes = {
  classifications: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ClassificationsGrid;
