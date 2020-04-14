import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import SelectExpenses from '../selectors/expenses';
import SelectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const word = expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div className="page-header">
            <div className="content-container">
            <h1>
                Viewing {expenseCount} {word} totalling {expensesTotal}
           
            </h1>
            <div className="page-header-action">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
            </div>
            
        </div>
    );
};

const mapStateToProps = (state) => {
    const visible = SelectExpenses(state.expenses,state.filter);
    return{
        expenseCount: visible.length,
        expensesTotal:SelectExpensesTotal(visible)
    };
};
export default connect(mapStateToProps)(ExpensesSummary);