define(function (require, exports, module) {

  var inp = document.getElementById("input1");
  var divOne = document.getElementById("one");
  var divTwo = document.getElementById("two");
  var divThree = document.getElementById("three");

  require("./drag.js").drag(divThree);

  inp.onclick = function () {

    divOne.style.display = "block";

    require("./scale.js").scale(divOne, divTwo)

  }

})
