# newt
let a constructor be used with or without new

... because typing boilerplate patterns sucks

## usage
```js
var newt = require('newt')

var person = newt(function person(firstName) {
  this.firstName = firstName
})

person.prototype.intro = function(other) {
  console.log('Hey ' + other.firstName + ', I\'m ' + this.firstName)
}

var me = person('jden')
var other = person('interweb')

me.intro(other)
// => "Hey interweb, I'm jden"

```


## installation

    $ npm install newt


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

MIT. (c) MMXIII jden <jason@denizac.org>. See LICENSE.md


"She turned me into a newt.... I got better!"