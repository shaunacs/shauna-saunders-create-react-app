import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Background from './components/pages/Background';
import Education from './components/pages/Education';
import Experience from './components/pages/Experience';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about-me" exact component={AboutMe}/>
        <Route path="/background" exact component={Background}/>
        <Route path="/education" excact component={Education}/>
        <Route path="/experience" exact component={Experience}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
