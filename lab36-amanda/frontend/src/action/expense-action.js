import uuid from 'uuid/v1';

export const expenseCreate = (expense) => ({
  type: 'EXPENSE_CREATE',
  payload: {...expense, id:uuid()},
});

export const expenseInsert = (expense) => ({
  type: 'EXPENSE_CREATE',
  payload: {...expense},
});

export const expenseUpdate = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: {...expense},
});

export const expenseDelete = (expense) => ({
  type: 'EXPENSE_DELETE',
  payload: {...expense},
});
