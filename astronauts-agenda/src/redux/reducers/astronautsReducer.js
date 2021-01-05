import actionTypes from '../actions/actions-types';

export default function astronautsReducer(state = {}, action) {
    let loading = '';
    switch (action.type) {
      case actionTypes.LOAD_ASTRONAUTS_LIST:
        loading = { ...state, astronautsList: action.astronautsList };
        break;
        case actionTypes.LOAD_LIST_ERROR:
        loading = { ...state, errorList: action.errorList };
        break;
      default:
        loading = state;
    }
    return loading;
  }