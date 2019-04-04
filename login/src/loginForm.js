import React, { Component } from 'react';
import LoginFormBody from './loginFormBody';
import { logIn } from './store/actions/user';
import { connect } from 'react-redux';


class LoginForm extends Component {
    id = null;
    submit = (value) => {
        let { email, username, password, rememberMe} = value;
        fetch(`http://localhost:3004/users?email=${email}&username=${username}&password=${password}`)
            .then(response => response.json())
            .then(data => {
              if(data.length === 0) {
                this.addNewUser(value);
              } else {
                if(rememberMe) {
                  localStorage.setItem('loggedIn',data[0].token);
                } else {
                  sessionStorage.setItem('loggedIn',data[0].token);
                }
                this.id = data[0].id;
              }  
            })
            .then(() => {
              let newUser = {
              ...value,
              
              "loggedId": "true",
              }
              newUser.id = this.id;
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
          sessionStorage.setItem('loggeInd',token);
        }
        value.token = token;
        delete value.rememberMe;
        fetch('http://localhost:3004/users', {
                method: 'POST',
                headers: new Headers({ 'content-type': 'application/json' }),
                body: JSON.stringify(value),
            })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              this.id = data.id;
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