import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store';

import './App.sass';
import './App.css';

import SearchResults from './components/SearchResults';

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <h1 className="title">Coming soon!</h1>
        <SearchResults />
      </div>
    </Provider>
  );
}

export default App;
