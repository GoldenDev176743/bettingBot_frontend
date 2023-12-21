// third-party
import { combineReducers } from 'redux';

// project import
import auth from './auth';
import menu from './menu';
import snackbar from './snackbar';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  auth,
  menu,
  snackbar
});

export default reducers;
