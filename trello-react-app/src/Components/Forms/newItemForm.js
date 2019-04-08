import React from 'react'
import { Field, reduxForm } from 'redux-form'

let NewItemForm = props => {
  const { handleSubmit, fieldName } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <Field name={fieldName} component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

NewItemForm = reduxForm({
  form: 'contact'
})(NewItemForm);

export default NewItemForm;