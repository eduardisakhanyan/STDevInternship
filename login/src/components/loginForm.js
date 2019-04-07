import React, { Component } from 'react';
import LoginFormBody from '../forms/loginFormBody';
import { logIn } from '../store/actions/user';
import { connect } from 'react-redux';


class LoginForm extends Component {
    id = null;
    totalProducts = null;
    submit = (value) => {
        let { email, username, password, rememberMe} = value;
        fetch(`http://localhost:3004/users?email=${email}&username=${username}&password=${password}`)
            .then(response => response.json())
            .then(data => {
              if(data.length === 0) {
                return this.addNewUser(value);
              } else {
                if(rememberMe) {
                  localStorage.setItem('loggedIn',data[0].token);
                } else {
                  sessionStorage.setItem('loggedIn',data[0].token);
                }
                return data[0];
              }  
            })
            .then((data) => {
              let newUser = {
              ...value,
              
              "loggedIn": "true",
              }
              newUser.id = data.id;
              newUser.totalProducts = data.totalProducts;
              delete newUser.rememberMe;
              this.props.logIn(newUser);
              this.props.history.push('/home');
            });
      }
    
      addNewUser = (value) => {
        let token = Date.now().toString(16);
        if(value.rememberMe) {
          localStorage.setItem('loggedIn',token);
        } else {
          sessionStorage.setItem('loggedIn',token);
        }
        value.token = token;
        value.totalProducts = 0;
        delete value.rememberMe;
        return fetch('http://localhost:3004/users', {
                method: 'POST',
                headers: new Headers({ 'content-type': 'application/json' }),
                body: JSON.stringify(value),
            })
            .then(response => response.json())
            .then(data => {
              this.id = data.id;
              this.totalProducts = data.totalProducts;
              return data;
            });
      }
      render () {
          return (
              <LoginFormBody onSubmit={this.submit} />
          )
      }
}
  
  const mapDispatchToProps = { logIn };
  
  export default connect(
    null,
    mapDispatchToProps
    )(LoginForm);