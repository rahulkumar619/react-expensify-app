import moment from 'moment';
import filtersReducers from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducers(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')

    });
});

test('should set text filter', () => {
    const text = 'This is me.';
    const action = {
        type: 'SET_TEXT',
        text
    };
    const state = filtersReducers(undefined,action);
    expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
    const startDate =  moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducers(undefined,action);
    expect(state.startDate).toEqual(startDate);
}); 

test('should set endDate filter', () => {
    const endDate =  moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducers(undefined,action);
    expect(state.endDate).toEqual(endDate);
}); 