const verifyRequest = (request, requiredField) => {
  const validate = {};
  const missingField = [];
  for (const field of requiredField) {
    if (!request[field]) {
      missingField.push(field);
    }
  }
  if (missingField.length > 0) {
    validate.status = 400;
    validate.message = `${missingField.join(", ")} is missing`;
  }
  return true;
};
