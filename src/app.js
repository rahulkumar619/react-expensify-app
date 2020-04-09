import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expense";
import { setTextFilter } from "./actions/filters";
import getVisibleExpense from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "water bill" , amount: 45}));
store.dispatch(addExpense({ description: "gas bill", amount: 66 }));
store.dispatch(setTextFilter("water"));

setTimeout(() => {
    store.dispatch(setTextFilter("bill"));
},3000)

const state = store.getState();
const visibleExpense = getVisibleExpense(state.exepenses, state.filters);
console.log(visibleExpense);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
