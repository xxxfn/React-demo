import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './styles/base.scss';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import Category from './pages/Category/Category';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/category" component={Category} />

        <Footer />
      </Fragment>
    </Router>
  )
}

export default App;
