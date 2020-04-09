import moment from 'moment';
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  
  
  };
  
  
  
 export default (state = filterReducerDefaultState, action) => {
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
  