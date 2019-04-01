import React, { Component } from 'react';
import './App.css';
import LoginForm from './loginForm';
import { connect } from 'react-redux';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from './home';
import {logIn} from './store/actions/user';


class App extends Component {

  isLoggedIn = localStorage.getItem('loggedIn');

  render() {
    return (
      <Switch>
        <Route exact path='/' render={({history}) => <LoginForm history={history}/>}/>
        <Route path='/home/' render={({history}) => <Home history={history}/>}/>
      </Switch>   
    );
  }
}

const mapStateToProps = state => {
  return {    
    user: state.user,
  }
}

const mapDispatchToProps = { logIn };

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
