import ActionsCellRenderer from '../components/administration/classification/ActionsCellRenderer';

export const classificationHeaders = [
  {
    headerName: 'ID',
    field: 'id',
  },
  {
    headerName: 'Name',
    field: 'name',
  },
  {
    headerName: 'Description',
    field: 'description',
  },
  {
    headerName: 'Actions',
    field: 'name',
    cellRenderer: 'actionsCellRenderer',
  },
];

export const getClassificationGridOptions = classifications => ({
  columnDefs: classificationHeaders,
  rowData: classifications,
  frameworkComponents: {
    actionsCellRenderer: ActionsCellRenderer,
  },
  rowHeight: 40,
});
