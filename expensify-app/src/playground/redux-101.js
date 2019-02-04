import {  createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type){
    case 'INCREMENT':
    const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
    const decrementBy = typeof action.decrementBy == 'number' ? action. decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
     return state
  }
});

const unsubsribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - than an object that gets sent to the store

// I'd like to increment the count
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'INCREMENT'
});

// I'd like to decrement the count

store.dispatch({
  type: 'DECREMENT'
});
// I'd like to set the count to 0
store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 6
});

store.dispatch({
  type: 'SET',
  count: 101
});

//Actions are a way to communicate to the store
