import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from '../Validations/RenderField';
import { required, 
        minLength6, 
        stringOnly} from '../Validations/Validators';

let LoginFormBody = props => {
  const { handleSubmit, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-Mail</label>
        <Field 
        name="email" 
        component={RenderField} 
        type="email"
        validate={[required]} 
        />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <Field 
        name="username" 
        component={RenderField} 
        type="text"
        validate={[stringOnly,required]} 
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field 
        name="password" 
        component={RenderField} 
        type="password"
        validate={[required,minLength6]} 
        />
      </div>
      <div>
        <label htmlFor="rememberMe">Remember Me</label>
        <Field name="rememberMe" component="input" type="checkbox"/>
      </div>
      <button type="submit" disabled={submitting}>Log In</button>
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