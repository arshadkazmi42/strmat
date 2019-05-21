# strmat

[![Build Status](https://api.travis-ci.com/arshadkazmi42/strmat.svg?branch=master)](https://api.travis-ci.com/arshadkazmi42/strmat)

Node plugin for string formatting with dynamic values like python

## Install

```
npm install strmat
```

or

```
yarn add strmat
```

## Usage

```js
const Strmat = require('strmat');

const string = 'This will {0} using dynamic {1}';
const values = ['format', 'queries'];

const formattedString = Strmat.format(string);

// Output:
// This will format using dyamic queries


const string = 'This will not use dynamic values';
const values = [];

// Output
// This will not use dynamic values


const string = undefined;
const values = ['format'];

// Output
// undefined
```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/strmat/issues/new).

Read our contributing [guide](CONTRIBUTING.md) to get started with contributing to the codebase.

## Contributors

Thank you to all the contributors who have helped us in making this project better 🙌

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>