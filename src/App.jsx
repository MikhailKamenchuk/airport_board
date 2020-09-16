import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import FlightsListContainer from './components/flights-list/FlightsListContainer';
import FligthsSearchPanel from './components/flights-search-panel/FligthsSearchPanel';

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='airport-board'>
          {/* <Route > */}
            <FligthsSearchPanel />
            <FlightsListContainer />
          {/* </Route> */}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App