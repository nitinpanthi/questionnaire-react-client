import CellRendererFactory from '../components/shared/cell_renderers/CellRendererFactory';
import { deleteClassification } from '../actions/classification.actions';

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

const actionsCellRenderer = CellRendererFactory.createActionsCellRenderer({
  deleteRow: deleteClassification,
});

export const getClassificationGridOptions = classifications => ({
  columnDefs: classificationHeaders,
  rowData: classifications,
  frameworkComponents: {
    actionsCellRenderer,
  },
  rowHeight: 40,
});
