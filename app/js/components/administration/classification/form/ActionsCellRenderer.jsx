import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete as DeleteIcon } from 'react-icons/md';

import { deleteClassification } from '../../../../actions/classification.actions';

const ActionsCellRenderer = ({ value, api }) => (
  <div>
    <button
      type="button"
      className="button_no_outline"
      onClick={() => {
        deleteClassification(value)
          .then(classifications => api.setRowData(classifications));
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

export default ActionsCellRenderer;
