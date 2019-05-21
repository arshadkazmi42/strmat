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
  for (let i = 0; i < values.length; i++) {
    string = string.replace(`{${i}}`, values[i]);
  }

  return string;
};


module.exports = {
  format
};
