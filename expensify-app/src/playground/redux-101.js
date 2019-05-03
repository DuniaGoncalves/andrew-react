import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions
//  - output is determined by input
// 2. Never change state or action
const CountReducer = (state = { count: 0 }, action) => {
  switch (action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
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
};

const store createStore(CountReducer);

const unsubsribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - than an object that gets sent to the store

store.dispatch(incrementCount({ incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 11 }));
store.dispatch(setCount( { count: 100 }));
