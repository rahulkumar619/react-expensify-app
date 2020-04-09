
import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense,removeExpense} from '../actions/expense';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            Editing the exepense {props.match.params.id}
            <ExpenseForm
            exepense={props.exepense}
            onSubmit={(exepense) => {
                props.dispatch(editExpense(props.match.params.id,exepense));
                props.history.push('/');
            }}
            />
            <button onClick={() => {
props.dispatch(removeExpense({id: props.exepense.id}));
props.history.push('/');
}}>Remove Item</button>


        </div>

    );
  
    
};


const mapStateToProps = (state,props) => {
    return {
        exepense: state.exepenses.find((exepense) => exepense.id === props.match.params.id)

    };
};
export default connect(mapStateToProps)(EditExpensePage);