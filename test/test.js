var chai = require('chai')
chai.should()

describe('newt', function () {
  var newt = require('../')
  
  it('destroys new', function () {

    var foo = newt(function foo() {
      this.bar = 'baz'
    })

    var a = foo()
    var b = new foo()

    a.should.be.instanceof(foo)
    b.should.be.instanceof(foo)

  })

  it('example', function () {
    var person = newt(function person(firstName) {
      this.firstName = firstName
    })

    person.prototype.intro = function(other) {
      console.log('Hey ' + other.firstName + ', I\'m ' + this.firstName)
    }

    var me = person('jden')
    var other = person('interweb')

    me.intro(other)
  })
})