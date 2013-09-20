function newt (fn) {
  var f = function () {
    if (!(this instanceof fn)) {
      var obj = Object.create(fn.prototype)
      fn.apply(obj, arguments)
      return obj
    }
    fn.apply(this, arguments)
  }
  f.name = fn.name
  f.prototype = fn.prototype

  return f
}

module.exports = newt