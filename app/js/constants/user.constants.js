import CellRendererFactory from '../components/shared/cell_renderers/CellRendererFactory';
import { deleteUser } from '../actions/user.actions';

export const userGridHeaders = [
  {
    headerName: 'UserName',
    field: 'username',
  },
  {
    headerName: 'FirstName',
    field: 'firstName',
  },
  {
    headerName: 'LastName',
    field: 'lastName',
  },
  {
    headerName: 'Email',
    field: 'email',
  },
  {
    headerName: 'Actions',
    field: 'actions',
    cellRenderer: 'actionsCellRenderer',
  },
];

const actionsCellRenderer = CellRendererFactory.createActionsCellRenderer({
  deleteRow: deleteUser,
});

export const getUserGridOptions = users => ({
  columnDefs: userGridHeaders,
  rowData: users,
  frameworkComponents: {
    actionsCellRenderer,
  },
  rowHeight: 40,
});
