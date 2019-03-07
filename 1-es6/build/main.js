"use strict";

(function () {
  console.log("es5.......scope test......");
  var name = "hello";
  console.log(name);

  if (true) {
    var name = "kkang";
  }

  console.log(name);
  {
    var name = "kim";
  }
  console.log(name);
  console.log("es6.....scope test......");
  var name1 = "hello";
  console.log(name1);

  if (true) {
    var _name = "kkang";
  }

  console.log(name1);
  {
    var _name2 = "kim";
  }
  console.log(name1);
  console.log("es6...default argument.....");

  function some(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
    console.log("X=".concat(x, " Y=").concat(y, " Z=").concat(z));
  }

  some(1);
  some(1, 2);
  some(1, 2, 3);
})();