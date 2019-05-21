const format = (string, values) => {

  // If no string given
  if (!string) {
    return undefined;
  }

  // If no values given
  if (!values || values.length === 0) {
    return string;
  }

  // Replace placeholder with values from values array
  for (let key in values) {
    string = string.replace(`{${key}}`, values[key]);
  }

  return string;
};


module.exports = {
  format
};
