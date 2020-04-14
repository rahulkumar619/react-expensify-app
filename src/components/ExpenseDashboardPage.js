import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilters from './ExpenseListFilters';
import {ExpensesSummary} from './ExpensesSummary';
const ExpenseDashBoardPage = () => <div><ExpensesSummary /><ExpenseListFilters /><ExpenseList /></div>;
export default ExpenseDashBoardPage;