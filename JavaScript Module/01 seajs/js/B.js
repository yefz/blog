define(function (require, exports, module) {
  // body...
  function show () {
    console.log("fn show B1")
  }

  // 对外提供接口对象
  exports.show = show;
});

function show () {
  console.log("fn show B2")
}
