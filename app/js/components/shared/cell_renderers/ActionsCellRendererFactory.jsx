import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete as DeleteIcon } from 'react-icons/md';

const create = (actions) => {
  const {
    deleteRow,
  } = actions;

  const ActionsCellRenderer = ({ value, api }) => (
    <div>
      <button
        type="button"
        className="button_no_outline"
        onClick={() => {
          deleteRow(value)
            .then(rows => api.setRowData(rows));
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );

  ActionsCellRenderer.propTypes = {
    value: PropTypes.string.isRequired,
    api: PropTypes.instanceOf(Object).isRequired,
  };

  return ActionsCellRenderer;
};

export default {
  create,
};
