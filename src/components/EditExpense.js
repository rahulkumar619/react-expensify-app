
import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense,startRemoveExpense} from '../actions/expense';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header-title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
            {/* Editing the exepense {props.match.params.id} */}
            <ExpenseForm
            exepense={props.exepense}
            onSubmit={(exepense) => {
                props.dispatch(startEditExpense(props.match.params.id,exepense));
                props.history.push('/');
            }}
            />
            <button className="button button-second" onClick={() => {
props.dispatch(startRemoveExpense({id: props.exepense.id}));
props.history.push('/');
}}>Remove Item</button>

            </div>
   


        </div>

    );
  
    
};


const mapStateToProps = (state,props) => {
    return {
        exepense: state.exepenses.find((exepense) => exepense.id === props.match.params.id)

    };
};
export default connect(mapStateToProps)(EditExpensePage);