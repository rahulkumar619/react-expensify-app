import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../actions/expense';

 const AddExpense = (props) =>(
    <div>

        <div className="page-header">
            <div className="content-container">
            <h1 className="page-header-title">Add Expense</h1>
            </div>
        </div>
       <div className="content-container">

      
        <ExpenseForm 
        onSubmit={(exepense) => {
           props.dispatch(startAddExpense(exepense));
            props.history.push('/');
        }}
        
        />
         </div>

    </div>

);
export default connect()(AddExpense);