import React, { Component } from 'react';
import { Router, Route } from 'react-router';

import logo from './logo.svg';
import './App.css';
import Home from './page/home';

var sectionStyle = {
  width: "100%",
  height: "1080px",
  backgroundSize: 'auto',
  backgroundImage: "url(https://www.mistrisolutions.com/wp-content/uploads/2016/01/website-design-background.png)"
};

class App extends Component {
  render() {
    return (
      <Router style={ sectionStyle }>
        <Route path={"/home"} component={Home}/>
      </Router>
    );
  }
}

export default App;
