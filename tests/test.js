const { expect } = require('chai');

const Strmat = require('../index');

describe('Fromat string with dynamic values array', () => {
  it('should generated formatted string with values', () => {
    const string = 'This will {0} using dynamic {1}';
    const values = ['format', 'queries'];
    const formattedString = Strmat.format(string, values);
    expect(formattedString).to.equal('This will format using dynamic queries');
  });

  it('should return same string', () => {
    const string = 'This will not use dynamic values';
    const values = [];
    const formattedString = Strmat.format(string, values);
    expect(formattedString).to.equal(string);
  });

  it('should return undefined value', () => {
    const string = undefined;
    const values = ['format'];
    const formattedString = Strmat.format(string, values);
    expect(formattedString).to.equal(undefined);
  });

  it('should generated formatted string for all matching with values', () => {
    const string = 'This will {0} using dynamic {0}';
    const values = ['format'];
    const replacedString = Strmat.format(string, values);
    expect(replacedString).to.equal('This will format using dynamic format');
  });
});

describe('Fromat string with dynamic values object', () => {
  it('should generated formatted string with values', () => {
    const string = 'This will {firstKey} using dynamic {secondKey}';
    const values = {
      'firstKey': 'format',
      'secondKey': 'queries'
    };
    const formattedString = Strmat.format(string, values);
    expect(formattedString).to.equal('This will format using dynamic queries');
  });

  it('should return same string', () => {
    const string = 'This will not use dynamic values';
    const values = {};
    const formattedString = Strmat.format(string, values);
    expect(formattedString).to.equal(string);
  });

  it('should return undefined value', () => {
    const string = undefined;
    const values = {'key': 'format'};
    const formattedString = Strmat.format(string, values);
    expect(formattedString).to.equal(undefined);
  });

  it('should generated formatted string for all matching with values', () => {
    const string = 'This will {key} using dynamic {key}';
    const values = {'key': 'format'};
    const replacedString = Strmat.format(string, values);
    expect(replacedString).to.equal('This will format using dynamic format');
  });
});
