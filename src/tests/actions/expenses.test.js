import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up removeExpense action object', () => {
  const action = removeExpense({id: '123abc'});

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});


test('should set up editExpense action object', () => {
  // const expense = {
  //   description: 'Rent',
  //   amount: 1095,
  //   createdAt: 1000
  // }
  const action = editExpense('abc123', { note: 'Rent' });

  expect(action).toEqual({
    id: 'abc123',
    type: 'EDIT_EXPENSE',
    updates: {
      note: 'Rent',
    }
  });
});

test('should set up addExpense action object with provided values', () => {
  const expenseData = {
    description: 'rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last month\'s rent',
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    }
  });
});

test('should set up addExpense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      amount: 0,
      createdAt: 0,
      description: '',
      note: '',
    }
  });
});