import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import Navigation from './components/Navigation/Navigation';
import SignUpForm from './components/SignUp/SignUpForm';
import LoginForm from './components/Login/LoginForm';
import Home from './components/Home/Home';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}



export default App;
