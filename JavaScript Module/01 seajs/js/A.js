/**
 * [description]
 * @param  {[type]} require [模块之间依赖接口]
 * @param  {[type]} exports [对外提供接口对象]
 * @param  {[type]} module  [description]
 * @return {[type]}         [description]
 * sea 参数(形参), 不允许修改
 */
define(function (require, exports, module) {

  // 模块之间依赖接口
  require("./C.js")
  // 当引入的是sea下模块的时候，那么require执行完返回的结果就是exports
  console.log(require("./C.js").b);

  function show () {
    console.log("fn show A1 " + a)
  }

  // 对外提供接口对象
  exports.show = show;
});

function show () {
  console.log("fn show A2")
}

