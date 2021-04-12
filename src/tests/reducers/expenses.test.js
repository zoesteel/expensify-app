import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const newExpense = {
    description: 'Banana',
    amount: 10000,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };
  
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, newExpense ]);
});

test('should edit an expense', () => {
  const updates = {
    description: 'a new description'
  };
  
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: updates
  }

  const state = expensesReducer(expenses, action);

  expect(state[0].description).toEqual(updates.description);
});

test('should not edit expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 4,
    updates: {
      description: 'this expense does not exist'
    }
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});