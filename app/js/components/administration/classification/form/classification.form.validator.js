const classificationFormValidator = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Classification name is required.';
  }
  if (!values.description) {
    errors.description = 'Classification description is required.';
  }
  return errors;
};

export default classificationFormValidator;
