let validateCategory = (category) => {
  if(!category.id|| !category.title || !category.timestamp)
    throw new Error('VALIDATION ERROR: category must have id, title, and timestap');
};

let initialState = {};
export default (state=initialState, action) => {
  let {type, payload} = action;
  let categoryID, categoryExpense;

  switch(type){
  case 'CATEGORY_CREATE':
    return {...state, [payload.id]: []};

  case 'CATEGORY_DELETE':
    return {...state, [payload.id]: undefined};

  case 'EXPENSE_CREATE':
    categoryID = payload.categoryID;
    categoryExpense = state[categoryID];
    return {...state,[categoryID]: [...categoryExpense, payload]};

  case 'EXPENSE_UPDATE':
    categoryID = payload.categoryID;
    categoryExpense = state[categoryID];
    return {
      ...state,
      [categoryID]: categoryExpense.map(expense =>
        expense.id === payload.id ? payload : expense),
    };

  case 'EXPENSE_DELETE':
    categoryID = payload.categoryID;
    categoryExpense = state[categoryID];
    return {
      ...state,
      [categoryID]: categoryExpense.filter(expense =>
        expense.id !== payload.id ),
    };

  default: return state;

  }
};
