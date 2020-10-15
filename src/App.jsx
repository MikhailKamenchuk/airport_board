import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import FlightsListContainer from './features/flights/components/flights-list/FlightsListContainer';
import FligthsSearchPanel from './features/flights/components/flights-search-panel/FligthsSearchPanel';

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='airport-board'>
            <FligthsSearchPanel />
            <FlightsListContainer />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App