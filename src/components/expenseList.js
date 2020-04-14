import React from "react";
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (Props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-mobile">Expenses</div>
      <div className="show-desktop">Expense</div>
      <div className="show-desktop">Amount</div>
    </div>


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

