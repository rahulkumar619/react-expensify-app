import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, {history} from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses   } from "./actions/expense";
import { login,logout } from "./actions/auth";
import getVisibleExpense from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import {firebase} from  "./firebase/firebase";
import LoadingPage from './components/LoadingPage'

const store = configureStore();

// store.dispatch(addExpense({ description: "water bill" , amount: 45}));
// store.dispatch(addExpense({ description: "gas bill", amount: 66 }));
// store.dispatch(setTextFilter("water"));

// setTimeout(() => {
//     store.dispatch(setTextFilter("bill"));
// },3000)

// const state = store.getState();
// const visibleExpense = getVisibleExpense(state.exepenses, state.filters);
// console.log(visibleExpense);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/'){
        history.push('/dashboard');
      }
     
    });

  }
  else
  {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

