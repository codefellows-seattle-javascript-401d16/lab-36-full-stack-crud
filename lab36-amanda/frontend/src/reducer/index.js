import {combineReducers} from 'redux';

import expenseReducer from './expense-reducer.js';
import categoryReducer from './category-reducer.js';

export default combineReducers({
  expenses: expenseReducer,
  categorys: categoryReducer,
});
