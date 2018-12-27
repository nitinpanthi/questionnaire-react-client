import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import { dispatchAfterGettingEditableAssessments } from '../../../actions/assessment.actions';

class Assessments extends Component {
  constructor(props) {
    super(props);
    const { users } = this.props;

    this.state = {
      columnDefs: [
        { headerName: 'Name', field: 'name' },
        { headerName: 'Description', field: 'description' },
      ],
      rowData: users,
    };
  }

  componentDidMount() {
    dispatchAfterGettingEditableAssessments();
  }

  render() {
    const { columnDefs, rowData } = this.state;

    return (
      <section>
        <Link to="/administration/assessments/new">Create New Assessment</Link>
        <div className="ag-theme-balham">
          <AgGridReact columnDefs={columnDefs} rowData={rowData} />
        </div>
      </section>
    );
  }
}

Assessments.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({ assessments: state.assessments });

export default connect(mapStateToProps)(Assessments);
