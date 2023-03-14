import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.action';
import { initialCounterState } from './counter.state';

const _counterReducer = createReducer(
  initialCounterState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);

// Driver
export const counterReducer = (state, action) => {
  return _counterReducer(state, action);
};
