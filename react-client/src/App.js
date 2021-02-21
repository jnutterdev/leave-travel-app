import React from 'react';

import './App.sass';
import './App.css';


import Header from './components/Header';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="App">
       <section className="">
            <div className="hero-head">
            <Header />
              <h1 className="title">Coming soon!</h1>
              <SearchResults />
            </div>
        </section>
    </div>
  );
}

export default App;
