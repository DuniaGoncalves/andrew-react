import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense({ description: 'Water Bill', amount:4500 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))
