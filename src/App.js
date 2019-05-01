import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import HomePage from './Components/HomePage';

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

export default App;
