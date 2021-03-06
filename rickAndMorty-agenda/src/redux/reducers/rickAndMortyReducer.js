import actionTypes from '../actions/actions-types';

export default function rickAndMortyReducer(state = {}, action) {
    let loading = '';
    switch (action.type) {
      case actionTypes.LOAD_CHARACTERS_LIST:
        loading = { ...state, charactersList: action.charactersList };
        break;
      case actionTypes.LOAD_LIST_ERROR:
        loading = { ...state, errorList: action.errorList };
        break;
      case actionTypes.LOAD_SPECIES_LIST:
        loading = { ...state, speciesList: action.speciesList };
        break;
      case actionTypes.LOAD_LIST_SPECIES_ERROR:
        loading = { ...state, errorSpeciesList: action.errorSpeciesList };
        break;
      default:
        loading = state;
    }
    return loading;
  }