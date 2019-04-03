import React from 'react'
import { Field, reduxForm } from 'redux-form'

let EditAddForm = props => {
  const { handleSubmit, buttonName } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <Field name="price" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="expDate">Exp.Date</label>
        <Field name="expDate" component="input" type="text" />
      </div>
      <button type="submit">{buttonName}</button>
    </form>
  )
}

EditAddForm = reduxForm({
  form: 'add',
  initialValues: {
    name: '',
    price: '',
    expDate: '',
  }
})(EditAddForm)

export default EditAddForm;