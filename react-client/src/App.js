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
import Favorites from './components/Favorites';
import Mytrips from './components/Mytrips';
import UserLogin from './components/UserLogin';
import Todo from './components/Todo';
import Footer from './components/Footer';
import SearchResults from './containers/SearchResults';
import ItineraryOptions from './components/ItineraryOptions';

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
                </Route>
                <Route path = '/favorites'>
                  <Favorites />
                </Route>
                <Route path = '/results'>
                  <SearchResults />
                </Route>
                <Route path = '/mytrips'>
                  <Mytrips />
                </Route>
                <Route Path = '/itineraries'>
                  <ItineraryOptions />
                </Route>
                <Route path = '/login'>
                  <UserLogin />
                </Route>
                <Route path = '/todo'>
                  <Todo />
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
