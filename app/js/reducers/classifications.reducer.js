import {
  FETCH_CLASSIFICATIONS,
} from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CLASSIFICATIONS:
      return action.classifications;
    default:
      return state;
  }
}
