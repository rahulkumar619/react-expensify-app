import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({

    type: 'ADD_EXPENSE',
    exepense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {} ) => ({

    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = ( id,updates ) => ({

    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text


});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate

})
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate

})


const exepenseReducerDefaultState = [];

const exepenseReducer = (state = exepenseReducerDefaultState, action) => {
    switch (action.type) {

        case 'ADD_EXPENSE':
            return [
                ...state,
                action.exepense
            ];
            case 'REMOVE_EXPENSE':
                return state.filter(({id}) => {

                    return id !== action.id;
                });
                case 'EDIT_EXPENSE':
                    return  state.map((exp) => {
                        if (exp.id === action.id){
                           return{
                            ...exp,
                            ...action.updates


                           };
                        }
                        else{
                            return exp;
                        }

                    });
        default:
            return state;
    }

};

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined


};



const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {

         case 'SET_START_DATE':
             return {
                ...state,
                startDate: action.startDate
             };

             case 'SET_END_DATE':
                return {
                   ...state,
                   endDate: action.endDate
                };

        case 'SET_TEXT':
            return {
                ...state,
                text : action.text

            };



        default:
            return state;
    }

};


const getVisibleExpenses = (exepenses,{text,sortBy,startDate,endDate}) => {
    return exepenses.filter((exepense) => {
        const startDateMatch = typeof startDate !== 'number' || exepense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || exepense.createdAt <= endDate;
        const textMatch = exepense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    

    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy ===  'amount') {
            return a.amount < b.amount ? 1 : -1;
        }

    });
};

const store = createStore(
    combineReducers({
        exepenses: exepenseReducer,
        filters: filtersReducer
    })


);
store.subscribe(() => {

    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.exepenses,state.filters);
    console.log(visibleExpenses);
});

 store.dispatch(addExpense({description: 'Rent',amount: 10000, createdAt: -111000}));
 store.dispatch(addExpense({description: 'Car',amount: 1000000, createdAt: -21000}));
// store.dispatch(removeExpense({id: two.exepense.id}));
// store.dispatch(editExpense(one.exepense.id, {amount:500}));
// store.dispatch(setTextFilter('ar'));
// store.dispatch(setTextFilter());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));


const demoState = {
 exepenses: [{
     id: 'poiu',
     description: 'January Rent',
     note: 'This was my last rent',
     amount: 10000,
     createdAt: 0
    
 }],

 filters: {
     text: 'rent',
     sortBy: 'amount',
     startDate: undefined,
     endDate: undefined



 }

};

