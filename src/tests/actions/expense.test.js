import { addExpense, editExpense, removeExpense } from '../../actions/expense';

test('should setup remove expense action object', () => {
    const action = removeExpense({id : '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'123abc'

    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'new note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note: 'new note'
        }

    });
});

test('should setup add expense action with values', () => {
    const expenseData = {
        description: 'rent',
        amount: 456100,
        createdAt:1000,
        note:'this was my last rent'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        exepense: {
            ...expenseData,
            id: expect.any(String)
        }

    });

});

test('should setup add expense action with defaults', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        exepense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt:0,
            note:''
        }

    });

});