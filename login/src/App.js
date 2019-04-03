import React, { Component } from 'react';
import './App.css';
import LoginForm from './loginForm';
import { connect } from 'react-redux';
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import Home from './home';
import Add from './add';
import { logIn, getUserByToken } from './store/actions/user';


class App extends Component {
  componentDidMount() {
    let session = localStorage.getItem('loggedIn') || sessionStorage.getItem('loggedIn');
    this.props.getUserByToken(session);
  }

  render() {
    let session = localStorage.getItem('loggedIn') || sessionStorage.getItem('loggedIn');
    return (
      <Switch>
        <Route exact path='/' render={({ history }) => (session ? (<Redirect to='/home/' />) :
          (<LoginForm history={history} />))} />
        <Route path='/home' render={({ history }) => <Home history={history} />} />
        <Route path='/add' component={Add} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = { logIn, getUserByToken };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
