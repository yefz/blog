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
    "revision": "c44b102eeb40d0a8174b1651a6000709"
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
    "url": "assets/js/13.472017e3.js",
    "revision": "e95f327d5affcff1a8e95148fa216ca9"
  },
  {
    "url": "assets/js/14.574f3a55.js",
    "revision": "59e4db80b3697bb3f1f4ab8fc5a82c69"
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
    "url": "assets/js/58.23a06cd4.js",
    "revision": "ecb084d00f4f738aa4c839e79c501b0f"
  },
  {
    "url": "assets/js/59.87a0ad27.js",
    "revision": "6e11be3cc790f2bc79de33bd317a9ecf"
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
    "url": "assets/js/app.bdacee79.js",
    "revision": "8287fc5d7fe0746e03c1811a8209ed3b"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "28f2ac12309081345e8c42f7666374f8"
  },
  {
    "url": "categories/HTML/CSS/index.html",
    "revision": "78fbfb56cc108ebd8aeb8bc97de4e169"
  },
  {
    "url": "categories/index.html",
    "revision": "b1af8a921dccc9b1b044eb18db586e1e"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "653493f55f6e77c816ac8891c8bf5fb4"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "74fb065849ae9a4e08c752e388123f29"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "9f3860a5d61ea7c465886c06f7d5aa91"
  },
  {
    "url": "categories/Plugin/index.html",
    "revision": "009d01912a41e63340e96f0b96b76573"
  },
  {
    "url": "categories/SASS/LESS/index.html",
    "revision": "f5352678d35045737c66a267f62f9de1"
  },
  {
    "url": "categories/Server/index.html",
    "revision": "30451cf134cb5580f10bae67acf23f9f"
  },
  {
    "url": "categories/Tools/index.html",
    "revision": "c17a795bad966a79a3c378362bf37d52"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "f8ac13a82e3348f6bea04748fba91e00"
  },
  {
    "url": "categories/UI/index.html",
    "revision": "f4cde8bde54756d170d5d306627eb575"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "6f837f212f12e71d3e7c66a56c32d0c8"
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
    "revision": "1219cdccc4bfddf22493d2360a976842"
  },
  {
    "url": "tag/index.html",
    "revision": "09da5fa251cf797a529833698eb25ca8"
  },
  {
    "url": "tags/Bower/index.html",
    "revision": "20ffb513e0f1e8145b8af5c4b8811012"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "d5331a5bb38a791bd83d5b8933ba9de4"
  },
  {
    "url": "tags/CSS3/index.html",
    "revision": "3ffe202040870f05c6d55db5ac19e378"
  },
  {
    "url": "tags/DOM/index.html",
    "revision": "26e155b9a60a11499b250669d0345d54"
  },
  {
    "url": "tags/ECMAScript 2015/index.html",
    "revision": "65bb5a8cf4224d653eb1ba54d7688a8a"
  },
  {
    "url": "tags/element-ui/index.html",
    "revision": "40c9f1a4db90e446c7902327af1595a8"
  },
  {
    "url": "tags/Event/index.html",
    "revision": "2b16124b3a4d375ba299f3970e4b2cd9"
  },
  {
    "url": "tags/flex/index.html",
    "revision": "afb141b77fd7b260ca089109ad3d9641"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "37924083be42927957a15f8a342a60d4"
  },
  {
    "url": "tags/hack/index.html",
    "revision": "a628b80f1815910fa8c3025ac8f2b9be"
  },
  {
    "url": "tags/http/index.html",
    "revision": "9728feff44eb0d49592d7eef05d6b120"
  },
  {
    "url": "tags/IE兼容/index.html",
    "revision": "eb983ba88c73ed068c70198b786941b7"
  },
  {
    "url": "tags/IE条件查询/index.html",
    "revision": "aecfed7d15d7f0f778e2f9812be6d10f"
  },
  {
    "url": "tags/Jade/index.html",
    "revision": "f1d462680645959930a08feaa3de5e13"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "4653a48f20f2b6bd6e3b96d61244eb73"
  },
  {
    "url": "tags/jquery-ui/index.html",
    "revision": "7d30ccfe63a09220d398564017921b2c"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "03346181f605903893402b6aa6422267"
  },
  {
    "url": "tags/JSON/index.html",
    "revision": "28a0e8ca6adc9fdbdd81d741c84ab3bd"
  },
  {
    "url": "tags/LESS/index.html",
    "revision": "441603dfd74536ba4d488bc1af4970ee"
  },
  {
    "url": "tags/loading/index.html",
    "revision": "497736758189ba6105bbebe3fbcf6fd7"
  },
  {
    "url": "tags/MongoDB/index.html",
    "revision": "537bc922feee5bc238072c55e6696107"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "2eff460f1b0a7d8c28588d106a7d0d68"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "3238dc378e24928a93e04d29caa44ff5"
  },
  {
    "url": "tags/Public Style/index.html",
    "revision": "36c46d4aa846bffe93b8a93307af192a"
  },
  {
    "url": "tags/router/index.html",
    "revision": "1f4351358e05f442a9e401e82f33700e"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "4b6d2186f0a3ef5f03b74ed99e8009ee"
  },
  {
    "url": "tags/Vue-cli/index.html",
    "revision": "944472024d7f6e87580cf875efee9070"
  },
  {
    "url": "tags/Vuex/index.html",
    "revision": "4999e749baafc84536890323019a9489"
  },
  {
    "url": "tags/动画/index.html",
    "revision": "8481bb548c844c8cda779cb6436fd34a"
  },
  {
    "url": "tags/原生JS/index.html",
    "revision": "3d0fa1776200cd7dab7cbd72eb963ab7"
  },
  {
    "url": "tags/栅格/index.html",
    "revision": "193189914554195d07f5ef33bc9424ab"
  },
  {
    "url": "tags/模板引擎/index.html",
    "revision": "667de5d68e7538f22449e086ccac9c99"
  },
  {
    "url": "timeline/index.html",
    "revision": "e25ff6dd69a4c75f55776c677a8ed701"
  },
  {
    "url": "views/database/MongoDB学习笔记.html",
    "revision": "1b1bcf2d7b3d5b24dea8c2d12a007888"
  },
  {
    "url": "views/html.css/CSS flex 弹性盒模型.html",
    "revision": "57f5879de29d930f72ba6d37a9cf90fd"
  },
  {
    "url": "views/html.css/CSS Hack.html",
    "revision": "426d8f4c6cf2d980edb5defa3aab238b"
  },
  {
    "url": "views/html.css/CSS-Public-Style.html",
    "revision": "32db45d6a11bb4facc21442081b3b986"
  },
  {
    "url": "views/html.css/HTML 页面加载过程.html",
    "revision": "61657cf70dc99b00f43f8afdd4d4c4c4"
  },
  {
    "url": "views/html.css/IE兼容问题总结.html",
    "revision": "7474c2c99948cb671a4daffdc29ac799"
  },
  {
    "url": "views/html.css/Jade 模板引擎.html",
    "revision": "720df89a9b2ddf23053dfc4351f59d91"
  },
  {
    "url": "views/html.css/移动端-CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "47c8c2e2b6b83dbc8d30e43f608ecc63"
  },
  {
    "url": "views/html.css/移动端-常见问题及解决方案.html",
    "revision": "07dfe43ea2a6b30cbc6beaef2f2488ae"
  },
  {
    "url": "views/html.css/移动端-适配方案.html",
    "revision": "eca19f33d53f61ed8505ec63cb66a6c9"
  },
  {
    "url": "views/javascript/ES6 学习笔记.html",
    "revision": "1f09127ea5d69eb4c834e1fd180b358e"
  },
  {
    "url": "views/javascript/ES6-新增数组操作方法.html",
    "revision": "5fc2bfef68980afe13d4b1b1878000e4"
  },
  {
    "url": "views/javascript/JavaScript-DOM事件.html",
    "revision": "65f3b1b5773832162fc5fad0333b02af"
  },
  {
    "url": "views/javascript/JavaScript-内置属性与方法.html",
    "revision": "df9fd621c3ebf24c36ce0dbbdcfe387e"
  },
  {
    "url": "views/javascript/JavaScript-字符串.html",
    "revision": "0e667779c21b227e07d56e8d432f2a5f"
  },
  {
    "url": "views/javascript/JavaScript-对象属性操作.html",
    "revision": "e692c7a4ba8a6d285455279a527c8984"
  },
  {
    "url": "views/javascript/JavaScript-常用方法封装.html",
    "revision": "4ab756779ec49dee859236c05cb83543"
  },
  {
    "url": "views/javascript/JavaScript-性能优化.html",
    "revision": "9c507586c2e5859bdd13417d099f2e9a"
  },
  {
    "url": "views/javascript/JavaScript-操作JSON.html",
    "revision": "a2b05ead927db61de851d1b89bd16d7e"
  },
  {
    "url": "views/javascript/JavaScript-数组.html",
    "revision": "ef3e9529dba1793e23c685854dd15aca"
  },
  {
    "url": "views/javascript/JavaScript-类型检查.html",
    "revision": "e86c8748f8dd77d5f80ae079d4ff2cfd"
  },
  {
    "url": "views/javascript/JavaScript-节点操作.html",
    "revision": "40f3305b991d08285c49a0aa2cc3503d"
  },
  {
    "url": "views/javascript/JavaScript-预编译-预解析.html",
    "revision": "834bb5c7b696ba786309961585915168"
  },
  {
    "url": "views/javascript/异步加载JS.html",
    "revision": "e9f7bcda900e03057460a20d51379e94"
  },
  {
    "url": "views/plugin/Axios.html",
    "revision": "3196c14da7e5964bd2bc94fc7ea23af0"
  },
  {
    "url": "views/plugin/jQuery-对应JavaScript书写.html",
    "revision": "ce8b58e7c0dd5ab6228f2557635336d0"
  },
  {
    "url": "views/plugin/jQuery-常用方法.html",
    "revision": "ee1f28c3d25dc6b93ff882ae2e6e4f00"
  },
  {
    "url": "views/plugin/jQuery-插件开发基础.html",
    "revision": "8ffe64069e31d8e6aff2b5b25c02d681"
  },
  {
    "url": "views/plugin/Plugin-JS-粒子动画.html",
    "revision": "d1948fed90210b5fe2eac67433b9c65c"
  },
  {
    "url": "views/sass.less/LESS-Grid-实现栅格布局.html",
    "revision": "2a5e8b8814ef134e6c608ffbb481c308"
  },
  {
    "url": "views/sass.less/LESS-函数方法.html",
    "revision": "a6c25add20d4b6e1845ba90faec2b69f"
  },
  {
    "url": "views/sass.less/LESS-学习总结.html",
    "revision": "82ac325ba4556eee3b17309f0def9eba"
  },
  {
    "url": "views/server/Java-JDBC.html",
    "revision": "6cf38260e583a247eae3a8a35263c281"
  },
  {
    "url": "views/server/Node-js-npm-nrm-nvm.html",
    "revision": "04cae8b8fb1e7ecb74f4aca85509ce8a"
  },
  {
    "url": "views/server/Node-js-事件驱动模型.html",
    "revision": "a4e7513078d689b3c4615127ca595eb4"
  },
  {
    "url": "views/server/Node-js-模块系统.html",
    "revision": "5ee3ba54f0f87d6ddcb0e25359217433"
  },
  {
    "url": "views/tools/Bower-包管理工具.html",
    "revision": "3a9739234da91ccd24230052c4336d32"
  },
  {
    "url": "views/tools/Gulp-构建工具.html",
    "revision": "6692ff49e324d596d1f56ef43bda4630"
  },
  {
    "url": "views/tools/Tool-Sunny-Ngrok-内网穿透.html",
    "revision": "8988ea29fa77c784eabb3330e2fd9d4c"
  },
  {
    "url": "views/typescript/TypeScript-入门.html",
    "revision": "a0a956ea3a934951c4b9e0555999158f"
  },
  {
    "url": "views/ui/Element-UI-分页组件封装.html",
    "revision": "3eb151168b97c065b3741f0f594559d5"
  },
  {
    "url": "views/ui/Element-UI-实现树形选择器.html",
    "revision": "2014a9aa3fc3afebf57877fdee76619e"
  },
  {
    "url": "views/ui/jQuery-UI.html",
    "revision": "37ddd6dd7856066960fe5ee883cd037f"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（一）构建初始项目.html",
    "revision": "c6bf7cedc36281bf083bdcfc7537acd1"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（三）配置 TypeScript.html",
    "revision": "76976bd269a16aed96d7d71b17e21746"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（二）设置接口代理.html",
    "revision": "fdbc8ed9bbeb05e4d5be63fab99b5423"
  },
  {
    "url": "views/vue/Vue-router 路由.html",
    "revision": "99f676456e93aba3e3fedf0dc861afe7"
  },
  {
    "url": "views/vue/Vue-Vuex 状态管理.html",
    "revision": "fac52c08c5b3cd7f2f84c56e784b1da8"
  },
  {
    "url": "views/vue/Vue-事件修饰符.html",
    "revision": "a8e92ce8f90ddd4080ef8eeb6b4655ab"
  },
  {
    "url": "views/vue/Vue-常见问题解决方案.html",
    "revision": "d7e3fab50573ad292f8167970130cbec"
  },
  {
    "url": "views/vue/Vue-指令.html",
    "revision": "19ebd7ae4a047ea4ce19fe53c1ff7ab4"
  },
  {
    "url": "views/vue/Vue-生命周期钩子.html",
    "revision": "29660eb985376752b969ef09370c98f8"
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
