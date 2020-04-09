import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expense';

const AddExpense = (props) =>(
    <div>
        <h1>Adding</h1>
        <ExpenseForm 
        onSubmit={(exepense) => {
           props.dispatch(addExpense(exepense));
            props.history.push('/');
        }}
        
        />

    </div>

);
export default connect()(AddExpense);