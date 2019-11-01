import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Recipe from './Containers/Recipe';
import { ContextController } from './common/config';

function App() {
  return (
    <ContextController>
      <Router>
        <div className="body">
          <div className="main-wrapper">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Banner} />
              <Route exact path="/recipe" component={Recipe} />
            </Switch>
            {/* <Footer /> */}
          </div>
        </div>
      </Router>
    </ContextController>
  );
}

export default App;
