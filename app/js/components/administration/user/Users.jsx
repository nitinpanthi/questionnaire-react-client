import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import UserCreator from './UserCreator';
import { fetchUsers } from '../../../actions/user.actions';

class Users extends Component {
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
    fetchUsers();
  }

  render() {
    const { columnDefs, rowData } = this.state;

    return (
      <section>
        <UserCreator />
        <div className="ag-theme-balham">
          <AgGridReact columnDefs={columnDefs} rowData={rowData} />
        </div>
      </section>
    );
  }
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({ users: state.users });

export default connect(mapStateToProps)(Users);
