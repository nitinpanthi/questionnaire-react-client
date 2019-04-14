import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { IoIosAdd, IoIosClose } from 'react-icons/io';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import ClassificationCreator from './ClassificationCreator';
import { getClassificationGridOptions } from '../../../constants/classification.constants';
import {
  saveClassification,
} from '../../../actions/classification.actions';


class ClassificationsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridOptions: {},
    };

    this.onGridReady = this.onGridReady.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onGridReady(params) {
    this.setState({
      gridOptions: params,
    });
  }

  onSubmit(classification) {
    const { gridOptions } = this.state;
    saveClassification(classification)
      .then(updatedClassifications => gridOptions.api.setRowData(updatedClassifications));
  }

  render() {
    const {
      classifications,
      toggleModalWindow,
      isModalWindowOpen,
    } = this.props;

    return (
      <section>
        {/* TODO: possibility of creating HOC here. */}
        <h1>Classifications</h1>
        <button type="button" onClick={toggleModalWindow} className="button_active">
          <IoIosAdd />
          New Classification
        </button>
        <ReactModal
          isOpen={isModalWindowOpen}
          className="modal_small"
        >
          <h3>New Classification</h3>
          <ClassificationCreator onSubmit={this.onSubmit} />
          <button type="button" onClick={toggleModalWindow} className="close_button">
            <IoIosClose />
          </button>
        </ReactModal>

        {
          classifications && classifications.length !== 0
            ? (
              <div
                className="ag-theme-balham"
                style={{
                  height: '500px',
                  marginTop: '20px',
                }}
              >
                <AgGridReact
                  gridOptions={getClassificationGridOptions(classifications)}
                  onGridReady={this.onGridReady}
                />
              </div>
            )
            : null
        }

      </section>
    );
  }

};

ClassificationsGrid.propTypes = {
  classifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  isModalWindowOpen: PropTypes.bool.isRequired,
  toggleModalWindow: PropTypes.func.isRequired,
};

export default ClassificationsGrid;
