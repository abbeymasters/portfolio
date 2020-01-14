import React from 'react';
import Header from '../components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Home from '../container/Home';
import Portfolio from '../container/Portfolio';
import Contact from './Contact.js';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </>
        <Footer />
      </Router>
    </div>
  );
};

export default App;


