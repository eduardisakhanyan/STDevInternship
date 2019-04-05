import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from './Validations/RenderField';
import { required,
        stringOnly,
        minPrice100,
        afterCurrentDate,
        numberOnly } from './Validations/Validators';

let EditAddForm = props => {
  const { handleSubmit, buttonName} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <Field 
        name="name" 
        component={RenderField} 
        type="text"
        validate={[required, stringOnly]} 
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <Field 
        name="price" 
        component={RenderField}
        type="text"
        validate={[required, numberOnly, minPrice100]} 
        />
      </div>
      <div>
        <label htmlFor="expDate">Exp.Date</label>
        <Field 
        name="expDate" 
        component={RenderField} 
        type="date"
        validate={[afterCurrentDate]} 
        />
      </div>
      <button type="submit">{buttonName}</button>
    </form>
  )
}

EditAddForm = reduxForm({
  form: 'add',
})(EditAddForm)

export default EditAddForm;