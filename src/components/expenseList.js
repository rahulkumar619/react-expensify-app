import React from "react";
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


const ExpenseList = (Props) => (
  <div>
    <h1>Expense List</h1>
    {Props.exepenses.map((exepense) => {
         return <ExpenseListItem  key = {exepense.id} {...exepense} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
    return {
        exepenses : selectExpenses(state.exepenses,state.filters)
 
    };
 };
export default connect(mapStateToProps)(ExpenseList);

