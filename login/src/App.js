import React, { Component } from 'react';
import './App.css';
import LoginForm from './loginForm';
import { connect } from 'react-redux';
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import Home from './home';
import Add from './add';
import Edit from './edit';
import { logIn, getUserByToken } from './store/actions/user';
import PrivateRoute from './privateRoute';


class App extends Component {
  componentDidMount() {
    let session = localStorage.getItem('loggedIn') || sessionStorage.getItem('loggedIn');
    if(session) {
      this.props.getUserByToken(session);
    }
  }



  render() {
    let session = localStorage.getItem('loggedIn') || sessionStorage.getItem('loggedIn');
    return (
      <Switch>
        <Route exact path='/' render={({ history }) => (session ? (<Redirect to='/home/' />) :
          (<LoginForm history={history} />))} />
        <PrivateRoute path='/home' component={Home} />
        <PrivateRoute path='/add' component={Add} />
        <PrivateRoute path='/edit' component={Edit} />
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
