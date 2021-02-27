import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.sass';
import './App.css';


import Header from './components/Header';
import Hero from './components/Hero';
import Mytrips from './components/Mytrips';
import Footer from './components/Footer';
import SearchResults from './containers/SearchResults';
import SearchForm from './containers/SearchForm';


function App() {
  return (
    <Router>
    <Provider store = { store }>
      <div className="App">
         <section className="">
            <div className="hero-head">
              <Header />
              <Switch>
                <Route exact path = '/'>
                  <Hero />
                  <SearchForm />
                </Route>
                <Route path = '/results'>
                  <SearchResults />
                </Route>
                <Route path = '/mytrips'>
                  <Mytrips />
                </Route>
              </Switch>
            </div>
            <Footer />
          </section>
      </div>
    </Provider>
    </Router>
  );
}

export default App;
