import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginFormBody = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-Mail</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <div>
        <label htmlFor="rememberMe">Remember Me</label>
        <Field name="rememberMe" component="input" type="checkbox"/>
      </div>
      <button type="submit">Log In</button>
    </form>
  )
}

LoginFormBody = reduxForm({
  form: 'login',
  initialValues: {
    email: 'ebarvSirun@gmail.com',
    username: 'siruns',
    password: '123456',
  }
})(LoginFormBody)

export default LoginFormBody;