import React, { Component } from 'react';
import LoginFormBody from './loginFormBody';
import { logIn } from './store/actions/user';
import { connect } from 'react-redux';


class LoginForm extends Component {
    submit = (value) => {
        let { email, username, password, rememberMe} = value;
        if(rememberMe) {
            localStorage.setItem("loggedIn",Date.now().toString(16));
        } else {
            sessionStorage.setItem("loggedIn",Date.now().toString(16));
        }
        fetch(`http://localhost:3004/users?email=${email}&username=${username}&password=${password}`)
            .then(response => response.json())
            .then(data => {
              if(data.length === 0) {
                this.addNewUser(value);
              }
            })
            .then(() => {
              let newUser = {
              ...value,
              "loggedId": "true"
              }
              delete newUser.rememberMe;
              this.props.logIn(newUser);
              this.props.history.push('/home/');
            });
      }
    
      addNewUser = (value) => {
        fetch('http://localhost:3004/users', {
                method: 'POST',
                headers: new Headers({ 'content-type': 'application/json' }),
                body: JSON.stringify(value),
            })
            .then(response => response.text())
            .then(text => console.log(text));
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