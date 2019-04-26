const userFormValidator = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'required';
  }
  if (!values.lastName) {
    errors.lastName = 'required';
  }
  if (!values.email) {
    errors.email = 'required';
  }
  return errors;
};

export default userFormValidator;
