export const required = value => (value || typeof value === 'number' ? undefined : 'Required');

const minLength = min => value => 
  (value && value.length < min)? `Must be ${min} characters or more`: undefined;
export const minLength6 = minLength(6);

export const stringOnly = value => (value && !/^[A-Z]+$/i.test(value))
? "Only Strings" 
: undefined;

const minPrice = min => value =>
(value && value < min)?`Must be ${min} price or more`: undefined;

export const minPrice100 = minPrice(100);

export const numberOnly = value => 
( value && !/^[1-9][0-9]*$/.test(value))
? "Only Valid Numbers"
: undefined;

export const afterCurrentDate = value => {
    let date = Date.now();
    let inputDate = new Date(value);
    return (+inputDate <= +date?"Must be after current date":undefined);
}
