import React , { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../page/home';
import './header.css';

const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>

class Header extends Component{
  render() {
    return (
      <div class="header">
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src="https://www.hands.org/wp-content/uploads/2016/03/AHV-Logo-NO-Tag-Horizontal-Color.png" alt="DEVAHOY LOGO" width="112" height="28" />
            </Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="../page/home" className="navbar-item">Home</Link>
              <Link to="/posts" className="navbar-item">Posts</Link>
              <Link to="/projects" className="navbar-item">Projects</Link>
              <Link to="/about" className="navbar-item">About</Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="App container">
        <Route exact path="../page/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/post" component={Post} />
        <Route path="/project" component={Project} />
      </div>
      </div>
    )
  }
}
export default Header;
