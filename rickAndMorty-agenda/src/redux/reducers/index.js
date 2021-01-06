import { combineReducers } from 'redux';
import rickAndMortyReducer from './rickAndMortyReducer';

const rootReducer = combineReducers({ rickAndMortyReducer });

export default rootReducer;