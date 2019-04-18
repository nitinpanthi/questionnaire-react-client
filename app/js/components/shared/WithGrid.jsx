import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoIosAdd, IoIosClose } from 'react-icons/io';
import ReactModal from 'react-modal';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const withGrid = (pageTitle, formTitle, save) => (WrappedForm) => {
  class _WrapppedForm extends Component {
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

    onSubmit(formData) {
      const { gridOptions } = this.state;
      save(formData)
        .then(rows => gridOptions.api.setRowData(rows));
    }

    render() {
      const {
        rows,
        toggleModalWindow,
        isModalWindowOpen,
        initialGridOptions,
      } = this.props;

      return (
        <section>
          <h1>{pageTitle}</h1>
          <button type="button" onClick={toggleModalWindow} className="button_active">
            <IoIosAdd />
            {formTitle}
          </button>
          <ReactModal
            isOpen={isModalWindowOpen}
            className="modal_small"
          >
            <h3>{formTitle}</h3>
            <WrappedForm onSubmit={this.onSubmit} />
            <button type="button" onClick={toggleModalWindow} className="close_button">
              <IoIosClose />
            </button>
          </ReactModal>

          {
            rows && rows.length !== 0
              ? (
                <div
                  className="ag-theme-balham"
                  style={{
                    height: '500px',
                    marginTop: '20px',
                  }}
                >
                  <AgGridReact
                    gridOptions={initialGridOptions}
                    onGridReady={this.onGridReady}
                  />
                </div>
              )
              : null
          }
        </section>
      );
    }
  }

  _WrapppedForm.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleModalWindow: PropTypes.func.isRequired,
    isModalWindowOpen: PropTypes.bool.isRequired,
    initialGridOptions: PropTypes.instanceOf(Object).isRequired,
  };

  return _WrapppedForm;
};

export default withGrid;
