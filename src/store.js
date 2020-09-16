import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import { flightsReducer } from './reducers/flights.reducer';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result
}

const reducer = combineReducers({
  flights: flightsReducer
})
const composeEnhanceres =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhanceres(
    applyMiddleware(logger, thunk)
  )
);

export default store

