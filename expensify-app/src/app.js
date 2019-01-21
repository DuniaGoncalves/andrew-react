import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashBoardPage = () => (
  <div>This is from Dashbboard</div>
)

const AddExpensivePage = () => (
  <div>This is from Add Expense</div>
)

const EditExpensivePage = () => (
  <div>This is from Edit</div>
)

const HelpPage = () => (
  <div>This is from Help</div>
)

const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={ExpenseDashBoardPage} exact={true}/>
      <Route path='/create' component={AddExpensivePage}/>
      <Route path='/edit' component={EditExpensivePage}/>
      <Route path='/help' component={HelpPage}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'))
