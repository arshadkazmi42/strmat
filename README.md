# strmat

[![Build](https://github.com/arshadkazmi42/strmat/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/strmat/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/strmat.svg)](https://www.npmjs.com/package/strmat)
[![NPM Downloads](https://img.shields.io/npm/dt/strmat.svg)](https://www.npmjs.com/package/strmat)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/strmat.svg)](https://github.com/arshadkazmi42/strmat)
[![LICENSE](https://img.shields.io/npm/l/strmat.svg)](https://github.com/arshadkazmi42/strmat/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/strmat.svg)](https://github.com/arshadkazmi42/strmat/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/strmat.svg)](https://github.com/arshadkazmi42/strmat/commits/master)

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
const formattedString = Strmat.format(string, values);

// Output:
// This will format using dyamic queries


const string = 'This will {firstKey} using dynamic {secondKey}';
const values = {
  'firstKey': 'format',
  'secondKey': 'queries'
};
const formattedString = Strmat.format(string, values);

// Output:
// This will format using dyamic queries


const string = 'This will not use dynamic values';
const values = {};
const formattedString = Strmat.format(string, values);

// Output
// This will not use dynamic values


const string = 'This will not use dynamic values';
const values = [];
const formattedString = Strmat.format(string, values);

// Output
// This will not use dynamic values


const string = undefined;
const values = ['format'];
const formattedString = Strmat.format(string, values);

// Output
// undefined
```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/strmat/issues/new).

Read our contributing [guide](CONTRIBUTING.md) to get started with contributing to the codebase.
