/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e6665de24d22cec08a390dbffe5d3234"
  },
  {
    "url": "assets/css/0.styles.78007cad.css",
    "revision": "01954a6cee46efced089d60e9bec210a"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.95af363f.js",
    "revision": "4cfe3ca90a1678b3fa25a77f295cf060"
  },
  {
    "url": "assets/js/10.63b51f97.js",
    "revision": "61add6f9de5129699a7ebbbd74cfb5df"
  },
  {
    "url": "assets/js/11.11179781.js",
    "revision": "37cac59ced66dab34b0fb0c23baee8ea"
  },
  {
    "url": "assets/js/12.38ebe5f8.js",
    "revision": "ff9e0a5abe01f3d0d260352368886838"
  },
  {
    "url": "assets/js/13.da5bd8a5.js",
    "revision": "df0a5206428879661b6b837789143458"
  },
  {
    "url": "assets/js/14.9fbf675f.js",
    "revision": "9701cd6d48abb62f91674b5ab767aed6"
  },
  {
    "url": "assets/js/15.824ab334.js",
    "revision": "22eab29c618b1cb73aa6af73682508e8"
  },
  {
    "url": "assets/js/16.af98ccee.js",
    "revision": "dcda005d4deb5474e5a79b149a88ff7a"
  },
  {
    "url": "assets/js/17.cbbe3129.js",
    "revision": "0a6e7f64ca542e0c29d4a2eec02f5e9a"
  },
  {
    "url": "assets/js/18.a8f239b4.js",
    "revision": "3918537b63920dea2e925c85c9e5ff0d"
  },
  {
    "url": "assets/js/19.58c7e18a.js",
    "revision": "d54863b3913ba3654ed60253487d7b33"
  },
  {
    "url": "assets/js/20.3ccb446d.js",
    "revision": "93bf8863063c3a2e48e171421797f122"
  },
  {
    "url": "assets/js/21.f9c6a14f.js",
    "revision": "6f43a8ae89ba9e9b70e9a908bbf6670f"
  },
  {
    "url": "assets/js/22.cf557f68.js",
    "revision": "47be213d94a13be2e39830c360f2673a"
  },
  {
    "url": "assets/js/23.59f903e6.js",
    "revision": "33605b74c27473ddc5c0f0248d5df7c0"
  },
  {
    "url": "assets/js/24.fb59bd51.js",
    "revision": "c82cd4280cf8e8f0db1cf0258d520b87"
  },
  {
    "url": "assets/js/25.e741ba22.js",
    "revision": "7c39460ed58f0deae374626475caf270"
  },
  {
    "url": "assets/js/26.10c13c77.js",
    "revision": "8eeeea61b44b242d7de776e9437d802a"
  },
  {
    "url": "assets/js/27.cd6a22ff.js",
    "revision": "ebfa3cb5a1cd1d32192f9d572089ec21"
  },
  {
    "url": "assets/js/28.0cc4565c.js",
    "revision": "3b101887dd107652237ddca0ba9bdb1b"
  },
  {
    "url": "assets/js/29.db651d49.js",
    "revision": "ae0466ad8de1f3e8e52e3e10974caea2"
  },
  {
    "url": "assets/js/3.9a7f00a9.js",
    "revision": "07d906c7d22faaf38eccd30723c5dd13"
  },
  {
    "url": "assets/js/30.c2efe970.js",
    "revision": "648a95108b51c24252a07a0c8df539eb"
  },
  {
    "url": "assets/js/31.825f4cf1.js",
    "revision": "d11adc59b4fbf55698c79c9fa2b153a8"
  },
  {
    "url": "assets/js/32.64d9ae49.js",
    "revision": "0b8b6b7025b1e867371ebcd20bb49784"
  },
  {
    "url": "assets/js/33.ca5383c1.js",
    "revision": "7756b14cb186af5d0f596d68400f6ce7"
  },
  {
    "url": "assets/js/34.37f75bf1.js",
    "revision": "6364e93f93280cdeecab57e0673bd30c"
  },
  {
    "url": "assets/js/35.bc4c449a.js",
    "revision": "0a77939bea83410f6e7e57058e4a14c2"
  },
  {
    "url": "assets/js/36.53d63c1e.js",
    "revision": "0ca8ade097672c61c3308d69225404d9"
  },
  {
    "url": "assets/js/37.158c8988.js",
    "revision": "61855e17bacb836b6146978304bffa97"
  },
  {
    "url": "assets/js/38.53c70c22.js",
    "revision": "689aba623715861ae482e65685bd9d26"
  },
  {
    "url": "assets/js/39.5cb0aa7f.js",
    "revision": "e1826538f0855e9a9286a96618b57eb8"
  },
  {
    "url": "assets/js/4.9b7e9b33.js",
    "revision": "a9cd04191d45c637458ff33c299c3593"
  },
  {
    "url": "assets/js/40.a8ea8903.js",
    "revision": "9d22752903c710133071cb2861ff948c"
  },
  {
    "url": "assets/js/41.55ef169c.js",
    "revision": "ff73e913feed0e54ce053fe8fb6673ae"
  },
  {
    "url": "assets/js/42.9545af45.js",
    "revision": "fbeecaea3585191352c682b821f729e0"
  },
  {
    "url": "assets/js/43.9e5bce6c.js",
    "revision": "cf92ee834f08aeda9c33a4f8cf7d6be4"
  },
  {
    "url": "assets/js/44.43c38f84.js",
    "revision": "637e918c58265f3d879af85614508dee"
  },
  {
    "url": "assets/js/45.e13ee83c.js",
    "revision": "21264bbe041db2aa6a7792b20ad967b2"
  },
  {
    "url": "assets/js/46.3eecb216.js",
    "revision": "0946da1d44b119e3ae461e248357f116"
  },
  {
    "url": "assets/js/47.3c729aba.js",
    "revision": "2152e75d3dcc25f9535e08b2fbb58034"
  },
  {
    "url": "assets/js/48.93ac3275.js",
    "revision": "879126169e6c4e35dfb60a3ee75555e6"
  },
  {
    "url": "assets/js/49.57402a94.js",
    "revision": "30fe2f375afc30f5587a836ab6658203"
  },
  {
    "url": "assets/js/5.27ebcc5d.js",
    "revision": "a54dd53b4eeb999ea8ff8f798a26f212"
  },
  {
    "url": "assets/js/50.b55f3e1d.js",
    "revision": "8c98d205eb975f6cae243fb46153b016"
  },
  {
    "url": "assets/js/51.fe4f85be.js",
    "revision": "f5c6c774400464e7406c3da880a766ee"
  },
  {
    "url": "assets/js/52.04327ecd.js",
    "revision": "248cf0739a6ccfe37a3fe536b505b516"
  },
  {
    "url": "assets/js/53.c1f0d35e.js",
    "revision": "110fd2b9402d915b684ef123dea4e309"
  },
  {
    "url": "assets/js/54.75a826a8.js",
    "revision": "064447280c4ff1d98b65026f7a6ef508"
  },
  {
    "url": "assets/js/55.109b280d.js",
    "revision": "584610fe58440cacef08f754d5846b7f"
  },
  {
    "url": "assets/js/56.39916a79.js",
    "revision": "29ee1138019cacb50431a54f8340c634"
  },
  {
    "url": "assets/js/57.e81522a0.js",
    "revision": "7c6e961dd09507934ed95b0f179ab6e7"
  },
  {
    "url": "assets/js/58.d51febf9.js",
    "revision": "b7cd806dd3861794f958bd431061b118"
  },
  {
    "url": "assets/js/59.8f6e0410.js",
    "revision": "c1f30cc8defa531b97bba89f98580696"
  },
  {
    "url": "assets/js/6.7ee2e7b5.js",
    "revision": "b87108df3649bc05d37345f0eed39c81"
  },
  {
    "url": "assets/js/60.4d697a8f.js",
    "revision": "a1a81881704b560705425f720040d51f"
  },
  {
    "url": "assets/js/61.aa6f24aa.js",
    "revision": "ff43aede4ccefa676adcb19b7ecea07d"
  },
  {
    "url": "assets/js/62.8cd0d826.js",
    "revision": "09b007a3ce474afcc29c68aba17472a2"
  },
  {
    "url": "assets/js/63.14841d35.js",
    "revision": "163945fc3ee465d5005178532fd5960d"
  },
  {
    "url": "assets/js/64.25c60c19.js",
    "revision": "407579e394e16c34666de0a471b9b783"
  },
  {
    "url": "assets/js/65.39872d1e.js",
    "revision": "5e95391fd19b92dce58c40f186d18ff2"
  },
  {
    "url": "assets/js/66.76266f4b.js",
    "revision": "0b7e56e223c7a390bec1d70c06cf68b7"
  },
  {
    "url": "assets/js/67.d1f9141f.js",
    "revision": "2e298de9b11edeafce8f1ae5a34bb038"
  },
  {
    "url": "assets/js/7.8671f5bb.js",
    "revision": "37df2f6494b7db0d4f446ef1b042e762"
  },
  {
    "url": "assets/js/8.580a149d.js",
    "revision": "4578819d5367d349ec36a6f41b865167"
  },
  {
    "url": "assets/js/9.ad6c70f4.js",
    "revision": "ba3fa3f77caa801f09aab7106fe642ee"
  },
  {
    "url": "assets/js/app.09ef8f47.js",
    "revision": "68e3be63f9d390d483cf23daaea58633"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "fbb93975fb25947e927df858099546e0"
  },
  {
    "url": "categories/HTML/CSS/index.html",
    "revision": "d1c9e37652d9cd13cda5b9b6eb599881"
  },
  {
    "url": "categories/index.html",
    "revision": "144dd1d0b5d03d7ff0e42b7fdd973891"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "099d6e5e16f3a63ec98fe43f23f08b43"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "7fcd986da8689e9409fd12031a7ae2e4"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "925a18b3d8b5f215d01de03c98413d7d"
  },
  {
    "url": "categories/Plugin/index.html",
    "revision": "08fcc7cfed753e0473d0317ed476e87e"
  },
  {
    "url": "categories/SASS/LESS/index.html",
    "revision": "4b84d19ffa85d341e9bc0533b59ba819"
  },
  {
    "url": "categories/Server/index.html",
    "revision": "964c7460bcdd5a5f840b50c192cb710b"
  },
  {
    "url": "categories/Tools/index.html",
    "revision": "1a765b156475093ecb84c226be8ed52b"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "a0bc190a8447cdb2879db58234b009b5"
  },
  {
    "url": "categories/UI/index.html",
    "revision": "7a0e196435f239f409e0d19d445df7aa"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "a8a0250165be5694311c8453f918eeab"
  },
  {
    "url": "images/avatar.png",
    "revision": "6c430ca635cc533819bd0475c17f7b46"
  },
  {
    "url": "images/banner.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "images/line_bg.svg",
    "revision": "5825f033c6ff12cd1ed1f3c99dff5e4b"
  },
  {
    "url": "index.html",
    "revision": "3fd0cc2bebe56da4cd25010fa4aa82f7"
  },
  {
    "url": "tag/index.html",
    "revision": "6d3b8f49a5b3281b4a2347764014580d"
  },
  {
    "url": "tags/Bower/index.html",
    "revision": "ac27a10d27c7d9de176a8750c245936a"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "5b2de669da8ab3afcee1b6f727ae2268"
  },
  {
    "url": "tags/CSS3/index.html",
    "revision": "5a8311323ceb82b9dd5dfd562b8747ff"
  },
  {
    "url": "tags/DOM/index.html",
    "revision": "260e48db601e17949fa484ff927e4790"
  },
  {
    "url": "tags/ECMAScript 2015/index.html",
    "revision": "cc027ac1f205ec9e6d7bb0646a5d79dc"
  },
  {
    "url": "tags/element-ui/index.html",
    "revision": "4ef6ed5291dd986202f4100ddb54570a"
  },
  {
    "url": "tags/Event/index.html",
    "revision": "719d0a25da1aad175a0904ab7725ffd1"
  },
  {
    "url": "tags/Excel/index.html",
    "revision": "fe7fdedec54f51c541d6488b472870be"
  },
  {
    "url": "tags/flex/index.html",
    "revision": "660d154efb96af8d22152761cf1f916b"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "552da47fcc44eb81f1fafeea5e2fcee4"
  },
  {
    "url": "tags/hack/index.html",
    "revision": "0bfe5728ba7351aad17b6d960f9f5572"
  },
  {
    "url": "tags/http/index.html",
    "revision": "5f034f6f49cd9773ecfbf9797a4e5516"
  },
  {
    "url": "tags/IE兼容/index.html",
    "revision": "63d1b7ae2dc1941232fb3d9b58ec2be2"
  },
  {
    "url": "tags/IE条件查询/index.html",
    "revision": "bc94623febba3a347185ebd6e00d474a"
  },
  {
    "url": "tags/Jade/index.html",
    "revision": "75eef151d58eb94f536e129d8ac1291f"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "49eac41b153e64cf961d11e843c74cb6"
  },
  {
    "url": "tags/jquery-ui/index.html",
    "revision": "d985cb92fc62e02994d6e3036cb4d94c"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "41a209beeade9583999f8e8b6af08c14"
  },
  {
    "url": "tags/JSON/index.html",
    "revision": "872ea77141ebed425f1382944eed6f02"
  },
  {
    "url": "tags/LESS/index.html",
    "revision": "445643a92ed8d2c2a9bfdd8565215c9c"
  },
  {
    "url": "tags/loading/index.html",
    "revision": "4731f64779728cf08297537ad7a94186"
  },
  {
    "url": "tags/MongoDB/index.html",
    "revision": "570ae34fd077885d1c35f2464c0b1f83"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "043adc618083d0e9ecbbccb8629a35b2"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "6ab908fd56e20a48824bf52b27d95225"
  },
  {
    "url": "tags/Public Style/index.html",
    "revision": "7044fd8d63d49a919ce01fe6aadbc296"
  },
  {
    "url": "tags/router/index.html",
    "revision": "cb6f93fffa2d7e9e2e15f9a806765441"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "34acb5ad64370db9ce92971368aee02c"
  },
  {
    "url": "tags/Vue-cli/index.html",
    "revision": "b18bcfbd85ec03442992e8aca9e75ac3"
  },
  {
    "url": "tags/Vuex/index.html",
    "revision": "4e0645203f661197fe438eb4f08323c9"
  },
  {
    "url": "tags/动画/index.html",
    "revision": "a42e0239c8990652239fe4c974d6ec9a"
  },
  {
    "url": "tags/原生JS/index.html",
    "revision": "157ab10ecaa66bc6a47f8371e12d784d"
  },
  {
    "url": "tags/栅格/index.html",
    "revision": "5f466c78a62d56aa1414c262969b365b"
  },
  {
    "url": "tags/模板引擎/index.html",
    "revision": "34e1863f39b3b93532c4d9529d1c61e6"
  },
  {
    "url": "timeline/index.html",
    "revision": "c2adb3442d94db482ca44e160836c163"
  },
  {
    "url": "views/database/MongoDB学习笔记.html",
    "revision": "c5fc17f16f174ecc22c5ea9a78ecdb70"
  },
  {
    "url": "views/html.css/CSS flex 弹性盒模型.html",
    "revision": "81a2f418a96e70709547333ccd427b9d"
  },
  {
    "url": "views/html.css/CSS Hack.html",
    "revision": "6fd7ad30e257d260d95b447dc1f77aeb"
  },
  {
    "url": "views/html.css/CSS-Public-Style.html",
    "revision": "39931a27c21945db97c514636ee6a4be"
  },
  {
    "url": "views/html.css/HTML 页面加载过程.html",
    "revision": "10d9372f80dcc66733f8a6fd5e9967f6"
  },
  {
    "url": "views/html.css/IE兼容问题总结.html",
    "revision": "90a6ea6690d5ed0776cb1fdeb07594cd"
  },
  {
    "url": "views/html.css/Jade 模板引擎.html",
    "revision": "0e8d5365f802104a67ba0db7e8cc4463"
  },
  {
    "url": "views/html.css/移动端-CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "0e83ccdae3acad3c7be10407dd5ec265"
  },
  {
    "url": "views/html.css/移动端-常见问题及解决方案.html",
    "revision": "25602d0b349fec333f29e5ad0b5695d2"
  },
  {
    "url": "views/html.css/移动端-适配方案.html",
    "revision": "62df007e4390de840b2e2e45cbcf67f4"
  },
  {
    "url": "views/javascript/ES6 学习笔记.html",
    "revision": "184a487ec57542917d23c0cde494fddd"
  },
  {
    "url": "views/javascript/ES6-新增数组操作方法.html",
    "revision": "fda4de5c3eeb0c60de2ebacbb42c4bb0"
  },
  {
    "url": "views/javascript/JavaScript-DOM事件.html",
    "revision": "928c3af372d1f8112af6e8d629671564"
  },
  {
    "url": "views/javascript/JavaScript-内置属性与方法.html",
    "revision": "1d3307d0d072f094b0360b6d268489c0"
  },
  {
    "url": "views/javascript/JavaScript-字符串.html",
    "revision": "bfa9653b0efb50900d3279173d0c9c90"
  },
  {
    "url": "views/javascript/JavaScript-对象属性操作.html",
    "revision": "756757c134427ed798edde336666a8c8"
  },
  {
    "url": "views/javascript/JavaScript-常用方法封装.html",
    "revision": "67d717e86ad78d041608b5f2fe0801c0"
  },
  {
    "url": "views/javascript/JavaScript-性能优化.html",
    "revision": "3a32e4e53d3f3b576d19b064e055cf40"
  },
  {
    "url": "views/javascript/JavaScript-操作JSON.html",
    "revision": "758bfe755e00ccd7c0716cf2c74c8f93"
  },
  {
    "url": "views/javascript/JavaScript-数组.html",
    "revision": "5ce2e22c51e9d37623a270bfaac4a7b7"
  },
  {
    "url": "views/javascript/JavaScript-类型检查.html",
    "revision": "3be6fd7cd53395374ec7d08865890a37"
  },
  {
    "url": "views/javascript/JavaScript-节点操作.html",
    "revision": "f53dccc5b9cf5b5a2d886d4b43396d75"
  },
  {
    "url": "views/javascript/JavaScript-预编译-预解析.html",
    "revision": "a71a34b0ac59fd8b63c84124e2ce082f"
  },
  {
    "url": "views/javascript/异步加载JS.html",
    "revision": "9e9aa9a07e772a45a9ef3b7873aa18b0"
  },
  {
    "url": "views/plugin/Axios.html",
    "revision": "2da8223a6f8b6eacac799fb672de82c3"
  },
  {
    "url": "views/plugin/Handsontable-在线Excel表格.html",
    "revision": "d94b47834c6651d51888195e6450248c"
  },
  {
    "url": "views/plugin/jQuery-对应JavaScript书写.html",
    "revision": "6554be8497c357665c105fa1e2ba8b98"
  },
  {
    "url": "views/plugin/jQuery-常用方法.html",
    "revision": "6d6e64497ad259defa40604481665a03"
  },
  {
    "url": "views/plugin/jQuery-插件开发基础.html",
    "revision": "f0c798fff9879d1f33107f4580a66267"
  },
  {
    "url": "views/plugin/Plugin-JS-粒子动画.html",
    "revision": "c1ba1117878ebffe4f5a26641b31dca1"
  },
  {
    "url": "views/sass.less/LESS-Grid-实现栅格布局.html",
    "revision": "ab1c48510be7ae2d8a295c4005f6b543"
  },
  {
    "url": "views/sass.less/LESS-函数方法.html",
    "revision": "82f45fce743ad33ecc2c0b175ba1370f"
  },
  {
    "url": "views/sass.less/LESS-学习总结.html",
    "revision": "7a99c80bf166c73f1aac24d0b59d9480"
  },
  {
    "url": "views/server/Java-JDBC.html",
    "revision": "1a1d0a73ef7f63e00e5b008bed94c082"
  },
  {
    "url": "views/server/Node-js-npm-nrm-nvm.html",
    "revision": "cb9cea38a60becb0a1fc2cc6a769ec85"
  },
  {
    "url": "views/server/Node-js-事件驱动模型.html",
    "revision": "a346c9abed88948679e95137a4271c13"
  },
  {
    "url": "views/server/Node-js-模块系统.html",
    "revision": "9669073d91eeca64aa7ac03ce66e10ea"
  },
  {
    "url": "views/summary/前端知识体系汇总.html",
    "revision": "e69f8392fb591bbe95e0f1cd6c1dcc29"
  },
  {
    "url": "views/tools/Bower-包管理工具.html",
    "revision": "0683df86066bd40524e94236d9f4aa6c"
  },
  {
    "url": "views/tools/Gulp-构建工具.html",
    "revision": "934554fd18cfbe94fbd5296a5c50b6d4"
  },
  {
    "url": "views/tools/Tool-Sunny-Ngrok-内网穿透.html",
    "revision": "eaba89bcfaad5fe701e127df9d0d8c63"
  },
  {
    "url": "views/typescript/TypeScript-入门.html",
    "revision": "684f16e9e8225d2a5e1325c4a5f145a0"
  },
  {
    "url": "views/ui/Element-UI-分页组件封装.html",
    "revision": "ab14ffa58c443c74f7aa625f125b7faf"
  },
  {
    "url": "views/ui/Element-UI-实现树形选择器.html",
    "revision": "4e67f53ad8fcbbcc9330d1289da71f8a"
  },
  {
    "url": "views/ui/Element-UI-表格动态编辑.html",
    "revision": "341a60a17d34e548ab6f38206788df00"
  },
  {
    "url": "views/ui/jQuery-UI.html",
    "revision": "a5437c0e9a31bd73a09fbfc0ad3c9e0b"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（一）构建初始项目.html",
    "revision": "f446d12cae65b45f9ef800bfd6ff8cd3"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（三）配置 TypeScript.html",
    "revision": "413534b06ebc24f0514b7a86f5d5b3fd"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（二）设置接口代理.html",
    "revision": "17d044415132606dee7001cbd70951a0"
  },
  {
    "url": "views/vue/Vue-router 路由.html",
    "revision": "a63ec9e6d0eca13f09751c481735c037"
  },
  {
    "url": "views/vue/Vue-Vuex 状态管理.html",
    "revision": "6da230d6768902d53939d67f0456d569"
  },
  {
    "url": "views/vue/Vue-事件修饰符.html",
    "revision": "4a4c53757daeff7a9a77dcb31a806a2e"
  },
  {
    "url": "views/vue/Vue-常见问题解决方案.html",
    "revision": "57791773cfc89f8af34102e8fc530ef3"
  },
  {
    "url": "views/vue/Vue-指令.html",
    "revision": "b7cedf7bc9d655476af6112eb16ae613"
  },
  {
    "url": "views/vue/Vue-生命周期钩子.html",
    "revision": "764faa1e251962feaadcf3ac92a430cf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
