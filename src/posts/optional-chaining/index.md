---
path: "/optional-chaining"
date: "2020-05-02"
title: "⛓ The optional chaining operator in JavaScript"
description: "The optional chaining operator ?. permits reading the value of a property located deep within a chain of connected objects."
published: true
hero_image: "./optional-chaining.png"
tags: ['javascript 💛', 'es2020']
---

## Definition

The optional chaining operator `?.` permits reading the value of a property located deep within a chain of connected objects.

> The optional chaining was introduced as part of the ES2020 standard.

## Why this ?

It changes the way we access the properties from the deep objects. The optional chaining makes your code look cleaner 🧼 and crisp 🔥

 

Consider this piece of code, where the data object has a query and an answer to the query.

```json
const response = {
	"data": {
		"query": "What is javascript ?",
		"answer" : {
			"value": "JavaScript is 💛"
		}
	}
}
```

To access the `value`, you have to write a loooong conditional statement which is difficult to read and format 😢

```js
let theValue;

if(response &&
response.data &&
response.data.answer &&
response.data.answer.value) {
	theValue = response.data.answer.value;
} else {
	theValue = 'JavaScript is BAE 💛❤️';
}
```

But with optional chaining, you can access the `value` easily 😃 and you don't have to worry about the null & undefined checks.

```js
response?.data?.answer?.value

// Output
JavaScript is 💛
```

Wow, this code looks so clean 🧼 and crisp !! If the `value` is not present, we can assign a default value to it.

```js
response?.data?.answer?.key || 'JavaScript is BAE 💛❤️'

// Output
JavaScript is BAE 💛❤️
```

## Setting up the Babel Plugin

Babel [7.8.0](https://babeljs.io/blog/2020/01/11/7.8.0) supports the new `ECMAScript 2020` features by default. There is no need of enabling an individual plugin for optional chaining (`?.`).

If you are using the latest Babel version which is above or equal to 7.8.0, then it's an easy setup

```bash
npm install --save-dev @babel/cli @babel/core @babel/preset-env
```

Now add the following configuration to the `.babelrc`

```json:title=.babelrc
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

The necessary babel modules and the preset configurations are done. Now it's time to do the babel magic ✨

Run this command to transpile the code to the supported version everywhere. This command will work if you have installed the `babel` module globally.

```bash
babel app.js --out-file script-transpiled.js
```

All the optional chaining code should be placed in `app.js` and then the above command should be executed. This produces the transpiled code which works in major browsers and in `node.js`.

## Different types of optional chaining

### 1. Optional chaining with function calls

Optional chaining can be used when you are trying to invoke a method which may not exist. Using optional chaining with function calls causes the expression to automatically return undefined instead of throwing an exception.

```js
class Operation {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  getSum() {
    return this.a + this.b
  }
}

let o = new Operation(2, 3);
o.getSum(); // 5

o.getDiff(); // Output - Uncaught TypeError: o.getDiff is not a function
 
// Check if the function exists
typeof o.getDiff != "undefined" && o.getDiff(); 

// With the use of optional chaining
o.getDiff?.() // Output - undefined
```

### 2. Optional chaining with expression

If the left operand is null or undefined, the expression after the optional chaining operator will not be evaluated.

```js{numberLines: true}
let user = null;
let age = 12;
let isTeenage = user?.[value++];
console.log('isTeenage :: ', isTeenage);
```
<br />

```js:title=Output
isTeenage :: undefined
```

The user is defined as null, while executing the line #3, the `isTeenage` didn't throw any error because if the left operand is null or undefined, the expression will not be evaluated.

## 3. Combining with the nullish coalescing operator [which is another *ES2020* feature]

```js
let user = null;
let age = 12;
let isTeenage = user?.[value++] ?? 'not a teenager !!';
console.log('isTeenage :: ', isTeenage);
```
<br />

```js:title=Output
isTeenage :: not a teenager !!
```

## Things about optional chaining

🚀Clean & Readable code

🚀Don't worry about `null` or `undefined` in an object

🚀 Less error

## Browser Support

- Chrome - 80
- Edge - 80
- Firefox - 74
- Internet Explorer - NO
- Opera - 67
- Node.js - 14.0.0

## References

- [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
