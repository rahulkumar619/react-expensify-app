
const exepenseReducerDefaultState = [];

export default (state = exepenseReducerDefaultState, action) => {
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
