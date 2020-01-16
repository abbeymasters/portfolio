import React from 'react';
import Header from '../components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Portfolio from '../container/Portfolio';
import Contact from './Contact.js';
import AboutMe from './AboutMe.js';
import styles from './App.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Router>
        <Header />
        <>
          <Switch>
            <Route exact path='/' component={AboutMe} />
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


