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
    "revision": "d0ceba3293a691a8e971a8fc798cc9fd"
  },
  {
    "url": "assets/css/0.styles.e8cf010a.css",
    "revision": "e551887a4c29d7957871fff5e8cf08c8"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/home-head.9e98f9ef.png",
    "revision": "9e98f9efba10bcad33519b782a1d09db"
  },
  {
    "url": "assets/img/icon_vuepress_reco.406370f8.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.d9a60392.js",
    "revision": "47166bddb977ace74810c32276b065b2"
  },
  {
    "url": "assets/js/10.af5e8d34.js",
    "revision": "cc2d8d6da2751654dfcd76bf00ccdd80"
  },
  {
    "url": "assets/js/11.f036e47f.js",
    "revision": "ded16f97d38151d115c8f3d3a2684c23"
  },
  {
    "url": "assets/js/12.d85dacbd.js",
    "revision": "d05f2d7553684b3d482a8466635e9807"
  },
  {
    "url": "assets/js/13.c97b481a.js",
    "revision": "035855b56a4b8a3cf055e81102ac7fa7"
  },
  {
    "url": "assets/js/14.0bdf0154.js",
    "revision": "35cb0f397d18feb8ad97813ef5517bee"
  },
  {
    "url": "assets/js/15.fa3f404c.js",
    "revision": "54ce46ca58648f2bb1acddfe541e46b2"
  },
  {
    "url": "assets/js/16.844ca854.js",
    "revision": "4af9b2679b4bcc5bb3899a0b18df0d7e"
  },
  {
    "url": "assets/js/17.03a8557c.js",
    "revision": "b6cc0bbb1a0bd7b2306061099b8a8d9c"
  },
  {
    "url": "assets/js/18.a533ee3a.js",
    "revision": "ce6934e11fc4f62dabf81b1a80c91d14"
  },
  {
    "url": "assets/js/19.e2148252.js",
    "revision": "72f04d378d02fd04d9c5f9c0ff6f08d2"
  },
  {
    "url": "assets/js/20.9e7010df.js",
    "revision": "943b7f1b89cb8b6e73e717014eb2e866"
  },
  {
    "url": "assets/js/21.0c8614f0.js",
    "revision": "b985654841e66c3d908b88895d67f914"
  },
  {
    "url": "assets/js/22.5c5c3336.js",
    "revision": "32bb77a3e4bfb50536c6318a5d327675"
  },
  {
    "url": "assets/js/23.6ae7d2bc.js",
    "revision": "4b91071384e41567a7cd8bd738ecd6dc"
  },
  {
    "url": "assets/js/24.85a25e7e.js",
    "revision": "00bf121030106ef59b262a9c3654b16e"
  },
  {
    "url": "assets/js/25.dad95610.js",
    "revision": "934a90fde929815dce2be7afd6f8b4b8"
  },
  {
    "url": "assets/js/26.ef20d2a4.js",
    "revision": "0eba661d01a4c9efc37ea8eab707f8c8"
  },
  {
    "url": "assets/js/27.35396c06.js",
    "revision": "68920a5206726e932fe686a406a4638c"
  },
  {
    "url": "assets/js/28.f93126d3.js",
    "revision": "4e0c23058e0b92530e4fb8cdd87d49c5"
  },
  {
    "url": "assets/js/29.385a3b4c.js",
    "revision": "00ffd109f98c9101f51ebf2714aec46a"
  },
  {
    "url": "assets/js/3.07e1e7fc.js",
    "revision": "d179221ff37a9d40aca00c20613fe864"
  },
  {
    "url": "assets/js/30.a0e15d05.js",
    "revision": "889ca519fddc6dcdda783fcb4e10bc7b"
  },
  {
    "url": "assets/js/31.119ecae8.js",
    "revision": "7c99146fcaa22da38d90c14b97c7404d"
  },
  {
    "url": "assets/js/32.83dc2910.js",
    "revision": "20c85ad3fdc88bc8912a13928f62bd1a"
  },
  {
    "url": "assets/js/33.3ba3a534.js",
    "revision": "64ffa2d37f494737bc7ede5f6f98780b"
  },
  {
    "url": "assets/js/34.dffbb143.js",
    "revision": "d0667dbe60d985e04b7c5c352cb08905"
  },
  {
    "url": "assets/js/35.ab8e39ac.js",
    "revision": "36f42c6dde4e6d041f17f4fa52d785bd"
  },
  {
    "url": "assets/js/36.261d7cf9.js",
    "revision": "764b9c6db0396331aaba8a7ba8eff9df"
  },
  {
    "url": "assets/js/37.fde847cc.js",
    "revision": "4d89c0649a344aa57e2f9be1e435f85a"
  },
  {
    "url": "assets/js/38.d2b46437.js",
    "revision": "e470d50f450a2a19a152f42c3b511bc6"
  },
  {
    "url": "assets/js/39.4b8ca95b.js",
    "revision": "a1daa4fb06205c324fda4625ca4656e5"
  },
  {
    "url": "assets/js/4.28ee2d6c.js",
    "revision": "6c0d76ce0a100ccc0593bec86f73616d"
  },
  {
    "url": "assets/js/40.5c9c8515.js",
    "revision": "876eea2a4e4a27c4f4b89b70428d54e4"
  },
  {
    "url": "assets/js/41.50776308.js",
    "revision": "50e59435981ec81bdd0f69dc85a7787e"
  },
  {
    "url": "assets/js/42.d74385dc.js",
    "revision": "7a2cb2944e341afdf0e984c3cf5de710"
  },
  {
    "url": "assets/js/43.732bd4a3.js",
    "revision": "cde5957dff84533adf4d4edb21eaf0af"
  },
  {
    "url": "assets/js/44.079816a4.js",
    "revision": "763c020be884cc7d49f52c26e004145f"
  },
  {
    "url": "assets/js/45.c789b900.js",
    "revision": "d5401a2d45afa3ce5b45dc35bd22bb88"
  },
  {
    "url": "assets/js/46.3296bafd.js",
    "revision": "8d3b050617332c59ca79d00c5a9caddf"
  },
  {
    "url": "assets/js/47.8c1287d1.js",
    "revision": "fe510a18b81bdcd8a67d218b4e6d8717"
  },
  {
    "url": "assets/js/48.c0f774e1.js",
    "revision": "4a2cc5f17ff67fa9777057be3ef2d4dc"
  },
  {
    "url": "assets/js/49.b2a75c3b.js",
    "revision": "0395f0e606f1c9c18db914d925be2360"
  },
  {
    "url": "assets/js/5.2a1b7132.js",
    "revision": "b99befe3dbce38dd3038bf4505806fa8"
  },
  {
    "url": "assets/js/50.054a1f99.js",
    "revision": "ca7106ddc743502f488c8d32e16a208a"
  },
  {
    "url": "assets/js/51.13f4ee64.js",
    "revision": "452ed36512edfcd5716b9e0a968e5ec3"
  },
  {
    "url": "assets/js/52.db4a0cf8.js",
    "revision": "7226a400a84a028e9f73b5e6a34a1593"
  },
  {
    "url": "assets/js/53.f51377d9.js",
    "revision": "37cc0153567ddcd0b988a227fe889a21"
  },
  {
    "url": "assets/js/54.77aa7549.js",
    "revision": "b926568895a6cdb84333bd10b50bf32b"
  },
  {
    "url": "assets/js/55.5b2d5389.js",
    "revision": "e68563a099515ef91696e7ce4890f60d"
  },
  {
    "url": "assets/js/56.1f8b10ff.js",
    "revision": "ed9d0dd411b70dc6583e7c56943b116c"
  },
  {
    "url": "assets/js/57.caf158a2.js",
    "revision": "20c0c831fad909a6840fd1558fa19045"
  },
  {
    "url": "assets/js/58.7248fb38.js",
    "revision": "57142b0b83f191528077fa3d7ddc1334"
  },
  {
    "url": "assets/js/59.17cb5bbe.js",
    "revision": "826aff2acd3a2ee5920e1fc95eb9309c"
  },
  {
    "url": "assets/js/6.03fff91f.js",
    "revision": "ac9e30532b0db884dec72f87d0371a71"
  },
  {
    "url": "assets/js/60.dc22a4a0.js",
    "revision": "f9a2155269bdb58040748b7a73f4c779"
  },
  {
    "url": "assets/js/61.be0d4d8e.js",
    "revision": "8f1cc0b4bdccb6fded0ac1a6f5f42cb6"
  },
  {
    "url": "assets/js/62.79132a44.js",
    "revision": "7abfa66396b4df7d9f029d61744b4ff6"
  },
  {
    "url": "assets/js/63.7cb7b2ce.js",
    "revision": "fdcf6e37d53c0c60f993636bcbe34fad"
  },
  {
    "url": "assets/js/64.149df48b.js",
    "revision": "b7b1b13e3f2399fe2ca2863b72d82726"
  },
  {
    "url": "assets/js/7.ef49b13b.js",
    "revision": "0e8ade4245d0094cbb59ba55f176ec65"
  },
  {
    "url": "assets/js/8.9080afe1.js",
    "revision": "a5eda67b7ad90d2caca1038910f71cff"
  },
  {
    "url": "assets/js/9.c95af41c.js",
    "revision": "4f229878289dbe931f95783610577fd1"
  },
  {
    "url": "assets/js/app.1e727a4e.js",
    "revision": "e1b1d0634eff6ae857d29c9d23cf6595"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "de90ac9d5da5c30e64c0b17fdaba3704"
  },
  {
    "url": "categories/HTML/CSS/index.html",
    "revision": "2a935213341934ca94e8f578345a4f5a"
  },
  {
    "url": "categories/index.html",
    "revision": "3277ec42b10f7601c847723fb6d42cec"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "56ba38742f4216d8f1d43a6ab1a2a7a4"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "bb0e91e93cd05d3c18c0c2315754fce1"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "4d3741f61dec582b8bd4dc2032a7152e"
  },
  {
    "url": "categories/Plugin/index.html",
    "revision": "861dac1d80e3d36aac2a2552bd49800a"
  },
  {
    "url": "categories/SASS/LESS/index.html",
    "revision": "1b224fc3d6d81b94cbd6ce9d14298566"
  },
  {
    "url": "categories/Server/index.html",
    "revision": "183c00a734fade538ce5d04182dc0c96"
  },
  {
    "url": "categories/Tools/index.html",
    "revision": "afadcbcb94709669a2a6670c07953739"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "dc06bdfd88f851079991149082b7c41a"
  },
  {
    "url": "categories/UI/index.html",
    "revision": "fabb661d8f3f8d77cad8a09ccec55b65"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "9ba6394480acecd8eff25cff99ceca86"
  },
  {
    "url": "images/avatar.png",
    "revision": "6c430ca635cc533819bd0475c17f7b46"
  },
  {
    "url": "images/banner_1.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "images/banner_2.jpg",
    "revision": "9ef0dbc2fe2dffed80db4d4a48f51722"
  },
  {
    "url": "images/banner_3.jpg",
    "revision": "aacfd7e0202117b4e80bfed210ed3635"
  },
  {
    "url": "index.html",
    "revision": "29091fcabc86e239bed89a19f06d43a9"
  },
  {
    "url": "tag/index.html",
    "revision": "925f9bd3616393cb01b240f6821750a3"
  },
  {
    "url": "tags/Bower/index.html",
    "revision": "81f3fdc6a8b22aa914305e41a01a4a35"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "695a13ab3d2918d065eb08e5bc655ba7"
  },
  {
    "url": "tags/CSS3/index.html",
    "revision": "7ea453ede38edf492771894d6f71a4e0"
  },
  {
    "url": "tags/DOM/index.html",
    "revision": "338a03bd21030f3011aed81964cc7cc9"
  },
  {
    "url": "tags/ECMAScript 2015/index.html",
    "revision": "124642a6877b7f42bb14f81c915ea9d5"
  },
  {
    "url": "tags/element-ui/index.html",
    "revision": "1f038ca375f8937d3da8134f03287535"
  },
  {
    "url": "tags/Event/index.html",
    "revision": "20528a3b33aa5a4a3cec79923b15b51a"
  },
  {
    "url": "tags/flex/index.html",
    "revision": "75c3f769765c48070a5ae7e3cf1478a8"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "5028debb783cfadc8bd0d16942fff934"
  },
  {
    "url": "tags/hack/index.html",
    "revision": "52735a77f7ca225f827edb647bdd53aa"
  },
  {
    "url": "tags/http/index.html",
    "revision": "4345f478d2c2ed6bd289ed6f18893a7a"
  },
  {
    "url": "tags/IE兼容/index.html",
    "revision": "0dc1bf09839b51f0336001f10ae67d40"
  },
  {
    "url": "tags/IE条件查询/index.html",
    "revision": "674cecee794a4b257c72c25a2b1fd6ac"
  },
  {
    "url": "tags/Jade/index.html",
    "revision": "e27da9e529af5022caf0cd56005592df"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "5c4d638efa117374a100b5ecde29eaa4"
  },
  {
    "url": "tags/jquery-ui/index.html",
    "revision": "cbbcbefea318d19596baf895c6727884"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "f73c2c3487ba80731ecb818e1946afe9"
  },
  {
    "url": "tags/JSON/index.html",
    "revision": "2239e8c00fbba52af2f544a16aa51c59"
  },
  {
    "url": "tags/LESS/index.html",
    "revision": "734c3b01b599294d6ca1b46da1dc1db0"
  },
  {
    "url": "tags/loading/index.html",
    "revision": "03f627e6971ec5d2c41b08dc2977315f"
  },
  {
    "url": "tags/MongoDB/index.html",
    "revision": "9bb4212ae6c4255001102bc4092c6ac0"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "c024b27d1e940739e6ba6e4542153d96"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "0f623aaf21b33711ce374a490ca0ebd7"
  },
  {
    "url": "tags/Public Style/index.html",
    "revision": "effbf102b3426e0f076c13a3be26192b"
  },
  {
    "url": "tags/router/index.html",
    "revision": "60c68b82d45eb49ed66f43b162ec20c0"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "99c138165db7359b6b48b7ad47ffcc15"
  },
  {
    "url": "tags/Vue-cli/index.html",
    "revision": "f7a1cb47bd7a31a22fab2f3d674956b0"
  },
  {
    "url": "tags/Vuex/index.html",
    "revision": "b1b4b383148be558d8bb4cf55f6ee2e8"
  },
  {
    "url": "tags/动画/index.html",
    "revision": "caad852228267d3d3667d56700031b56"
  },
  {
    "url": "tags/原生JS/index.html",
    "revision": "a6005424792984780e94e7cef7d97056"
  },
  {
    "url": "tags/栅格/index.html",
    "revision": "fa7791d64b6697621a8aaf4bdeb9bd40"
  },
  {
    "url": "tags/模板引擎/index.html",
    "revision": "48176aa41271ea60bd609a6e354e3d40"
  },
  {
    "url": "timeline/index.html",
    "revision": "75e386738ae323befa8de103eef49b08"
  },
  {
    "url": "views/database/MongoDB学习笔记.html",
    "revision": "ba1294c71991e50bb1bf7b409d19bab8"
  },
  {
    "url": "views/html.css/CSS flex 弹性盒模型.html",
    "revision": "ecd030bb05d2a0492461314238bc0d93"
  },
  {
    "url": "views/html.css/CSS Hack.html",
    "revision": "e48885c7758345667f5fd427f35e3550"
  },
  {
    "url": "views/html.css/CSS-Public-Style.html",
    "revision": "a846b551305c21e00944df204481b4e7"
  },
  {
    "url": "views/html.css/HTML 页面加载过程.html",
    "revision": "657d405dc409ad04c61618816d46eacd"
  },
  {
    "url": "views/html.css/IE兼容问题总结.html",
    "revision": "c017e3ded609c8aebf1d2e983e0ede41"
  },
  {
    "url": "views/html.css/Jade 模板引擎.html",
    "revision": "db5afe05c9d59d79bbad8205f7ddc123"
  },
  {
    "url": "views/html.css/移动端-CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "8f952e7f5d5224a069077553c19a22c2"
  },
  {
    "url": "views/html.css/移动端-常见问题及解决方案.html",
    "revision": "b88935905d39175ef6a1e0811e62fdba"
  },
  {
    "url": "views/html.css/移动端-适配方案.html",
    "revision": "5002ba92d59bc2508c05c2f51ff53f65"
  },
  {
    "url": "views/javascript/ES6 学习笔记.html",
    "revision": "ce3fa5e80b30656f2bbbedf2d21491f0"
  },
  {
    "url": "views/javascript/ES6-新增数组操作方法.html",
    "revision": "94a5664999527da6e484d073f5a2dbc9"
  },
  {
    "url": "views/javascript/JavaScript-DOM事件.html",
    "revision": "ec382d14e03bda0db84d7cdac4d32eda"
  },
  {
    "url": "views/javascript/JavaScript-内置属性与方法.html",
    "revision": "55012ca2ba05718ba5c30088fd48074b"
  },
  {
    "url": "views/javascript/JavaScript-字符串.html",
    "revision": "656422a255571e3cb79d23ae25fc848f"
  },
  {
    "url": "views/javascript/JavaScript-对象属性操作.html",
    "revision": "ef038f9758df735a1f3602d819b1cc7e"
  },
  {
    "url": "views/javascript/JavaScript-常用方法封装.html",
    "revision": "029c17991956d896e350f4d360f9193e"
  },
  {
    "url": "views/javascript/JavaScript-性能优化.html",
    "revision": "0b710ec96d377f21558b399086dea4a2"
  },
  {
    "url": "views/javascript/JavaScript-操作JSON.html",
    "revision": "40191f44de0650b25acd512a17596c6f"
  },
  {
    "url": "views/javascript/JavaScript-数组.html",
    "revision": "884378f0ccd0a58c1a97315449e3e693"
  },
  {
    "url": "views/javascript/JavaScript-类型检查.html",
    "revision": "163821b09bf06a0283262d105fda76f0"
  },
  {
    "url": "views/javascript/JavaScript-节点操作.html",
    "revision": "0f4e37b6f8c73f59d39782803e64b2d6"
  },
  {
    "url": "views/javascript/JavaScript-预编译-预解析.html",
    "revision": "41c5fcf306929ffa094f9d29848bb1fe"
  },
  {
    "url": "views/javascript/异步加载JS.html",
    "revision": "96f65b7b170de78d268c8bba4517b97c"
  },
  {
    "url": "views/plugin/Axios.html",
    "revision": "c403f5f1350fd71b5a122be02e5f8b3b"
  },
  {
    "url": "views/plugin/jQuery-对应JavaScript书写.html",
    "revision": "711710369befe06b6d4a98c131dcb896"
  },
  {
    "url": "views/plugin/jQuery-常用方法.html",
    "revision": "14f8ef21564d87e3044b4e4f5812fe5d"
  },
  {
    "url": "views/plugin/jQuery-插件开发基础.html",
    "revision": "5d1dee0a6277393ab84c810fdf1d615f"
  },
  {
    "url": "views/plugin/Plugin-JS-粒子动画.html",
    "revision": "d8a66c96a72371db15ce21c601e27a00"
  },
  {
    "url": "views/sass.less/LESS-Grid-实现栅格布局.html",
    "revision": "915f7442304ff49e0063385c35a11397"
  },
  {
    "url": "views/sass.less/LESS-函数方法.html",
    "revision": "87eca478a4879618173521f41b6189c1"
  },
  {
    "url": "views/sass.less/LESS-学习总结.html",
    "revision": "ae05fd1df831db936f9c0d7bb989b924"
  },
  {
    "url": "views/server/Java-JDBC.html",
    "revision": "30cf22ae876a358fc29b35db4cd51c9e"
  },
  {
    "url": "views/server/Node-js-npm-nrm-nvm.html",
    "revision": "20ef7958ea98a114dc1e268112084371"
  },
  {
    "url": "views/server/Node-js-事件驱动模型.html",
    "revision": "6a2c9bbbddbfa260dd29c6980b018f5f"
  },
  {
    "url": "views/server/Node-js-模块系统.html",
    "revision": "7cfffb98c3ce6bee6a1a05e0a964e290"
  },
  {
    "url": "views/tools/Bower-包管理工具.html",
    "revision": "f04e243bfd7b1b4fe49c3007ec7f7eb8"
  },
  {
    "url": "views/tools/Gulp-构建工具.html",
    "revision": "88ab6d1ee59c551cda74d5b59ab696e1"
  },
  {
    "url": "views/tools/Tool-Sunny-Ngrok-内网穿透.html",
    "revision": "c65e71a518ed3047fe8571c285fc2f17"
  },
  {
    "url": "views/typescript/TypeScript-入门.html",
    "revision": "b1252497941c8ead03956854c72f6409"
  },
  {
    "url": "views/ui/Element-UI-分页组件封装.html",
    "revision": "9e7727925e3cef02b0c5f50bc8a5d864"
  },
  {
    "url": "views/ui/Element-UI-实现树形选择器.html",
    "revision": "feb96f07ec26be9b1b5e2e8e56b4ba42"
  },
  {
    "url": "views/ui/jQuery-UI.html",
    "revision": "3b70072739b19ae74ae1a9e7e4da2d15"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（一）构建初始项目.html",
    "revision": "ab6dcecb5564e7d766777dc631f5af21"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（三）配置 TypeScript.html",
    "revision": "ae16f9775536beef3c6b551bd8efd4a0"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（二）设置接口代理.html",
    "revision": "89a962b2422ec078d586e97554e4b1aa"
  },
  {
    "url": "views/vue/Vue-router 路由.html",
    "revision": "f0f277a5c23b90317fecae4d318e8013"
  },
  {
    "url": "views/vue/Vue-Vuex 状态管理.html",
    "revision": "9af168de8f8b9289ea0c7b95de61c701"
  },
  {
    "url": "views/vue/Vue-事件修饰符.html",
    "revision": "89241f29cd45af63d45f76208e50132a"
  },
  {
    "url": "views/vue/Vue-常见问题解决方案.html",
    "revision": "2a994dc11647f97248fd764bc66609cf"
  },
  {
    "url": "views/vue/Vue-指令.html",
    "revision": "e659c37f446d6f1b04822d67ac8c445d"
  },
  {
    "url": "views/vue/Vue-生命周期钩子.html",
    "revision": "d6bca4e5ce7e02cac2271247a7f007ba"
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
