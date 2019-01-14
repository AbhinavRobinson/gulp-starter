"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Car =
/*#__PURE__*/
function () {
  function Car(id) {
    _classCallCheck(this, Car);

    this.id = id;
  }

  _createClass(Car, [{
    key: "start",
    value: function start() {
      console.log(this);
      console.log(this.id);
    }
  }]);

  return Car;
}();

var car = new Car(20);
car.start();
var promise = new Promise(function (resolve, reject) {
  setTimeout(reject, 2000, 'promise');
});
promise.then(function (value) {
  return console.log('fulfilled ' + value);
}, function (error) {
  return console.error('rejected ' + error);
});