import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
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

const NotFoundPage = () => (
  <div>404!</div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ExpenseDashBoardPage} exact={true}/>
      <Route path='/create' component={AddExpensivePage}/>
      <Route path='/edit' component={EditExpensivePage}/>
      <Route path='/help' component={HelpPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'))
