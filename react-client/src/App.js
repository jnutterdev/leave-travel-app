import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store';

import './App.sass';
import './App.css';


import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
         <section className="">
              <div className="hero-head">
              <Header />
                <Hero />
                <h1 className="title">Coming soon!</h1>
                <SearchResults />
              </div>
              <Footer />
          </section>
      </div>
    </Provider>
  );
}

export default App;
