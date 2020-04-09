import { createStore } from 'redux';


const increment = ({incrementBy = 1} = {}) => ({
type : 'INCREMENT',
incrementBy


});

const decrement = ({decrementBy = 1} = {}) => ({

type: 'DECREMENT',
decrementBy


});

const store = createStore((state = { count : 0 }, action) => {

    switch(action.type)
    {
     case  'INCREMENT':

         return{
             count : state.count + action.incrementBy
         }

         case  'DECREMENT':
            return{
                count : state.count - action.decrementBy
            }

            default:
                return state;

    }


});


 store.subscribe(() => {

    console.log(store.getState());

});


store.dispatch(increment({incrementBy: 10}));
store.dispatch(decrement({ decrementBy: 5}));

store.dispatch(decrement());

// console.log(store.getState());