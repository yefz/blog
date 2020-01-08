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
    "revision": "5becb6b2063a22e6af4dedbb7f2a763e"
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
    "url": "assets/js/10.ff745a20.js",
    "revision": "3ed23a699f44172f0ad487ab26d9c22b"
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
    "url": "assets/js/15.990fc67b.js",
    "revision": "fdf6ef9fe4c2169b9b1c9e3b708aac73"
  },
  {
    "url": "assets/js/16.26224125.js",
    "revision": "2e7c1dd041fdfe87796d1c0767dd78ad"
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
    "url": "assets/js/29.1cd0d25d.js",
    "revision": "d10f806904cda4b916cc3fc9431d3392"
  },
  {
    "url": "assets/js/3.07e1e7fc.js",
    "revision": "d179221ff37a9d40aca00c20613fe864"
  },
  {
    "url": "assets/js/30.8af782e1.js",
    "revision": "06ce050d44a86f347a00f22a9c71a9ad"
  },
  {
    "url": "assets/js/31.bdf3fe9c.js",
    "revision": "4ff032fa467dc39babfd12f275bc3e7f"
  },
  {
    "url": "assets/js/32.dc3d0ca0.js",
    "revision": "1e412c916d4763100f74a8a5133b65f5"
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
    "url": "assets/js/37.4b2b3958.js",
    "revision": "ab348f7c55a1fe793c215b5e04b76498"
  },
  {
    "url": "assets/js/38.bc446085.js",
    "revision": "020c44329c7585ae77dbf2bdb4c0a475"
  },
  {
    "url": "assets/js/39.5cc9e2c9.js",
    "revision": "daa0447c966007707482d30dec185460"
  },
  {
    "url": "assets/js/4.28ee2d6c.js",
    "revision": "6c0d76ce0a100ccc0593bec86f73616d"
  },
  {
    "url": "assets/js/40.17ae1f6e.js",
    "revision": "85dfca0a07b39e6c889d3833b3c96607"
  },
  {
    "url": "assets/js/41.f69e5657.js",
    "revision": "6c93d4c6fa53cec9b233f3beec8eef51"
  },
  {
    "url": "assets/js/42.9945ca1f.js",
    "revision": "433d6f264fa8a9ade5ad23188c217ea7"
  },
  {
    "url": "assets/js/43.8ee2be49.js",
    "revision": "cb57bb2d4d708d25a5908ad4040076fb"
  },
  {
    "url": "assets/js/44.8d888e80.js",
    "revision": "f5555678b6dbf1092b4fd467d2ca0d50"
  },
  {
    "url": "assets/js/45.c134abd8.js",
    "revision": "5dcdc08d1e954d6d56441e42114cdc49"
  },
  {
    "url": "assets/js/46.69b2e1b4.js",
    "revision": "35ae2657c4c0f93a79ca103fee799b22"
  },
  {
    "url": "assets/js/47.c23e9386.js",
    "revision": "69a68d3aa7c35273203585b0cba45ee5"
  },
  {
    "url": "assets/js/48.a2597289.js",
    "revision": "20c5dcb7fa6b1ab760b909d90cca2a1b"
  },
  {
    "url": "assets/js/49.5beea9a8.js",
    "revision": "1418c3af6a8b4e477a3587bf7a1bb911"
  },
  {
    "url": "assets/js/5.2a1b7132.js",
    "revision": "b99befe3dbce38dd3038bf4505806fa8"
  },
  {
    "url": "assets/js/50.e325c275.js",
    "revision": "d6dd0540aa1f67051e7f95e7bd007aff"
  },
  {
    "url": "assets/js/51.15d3e817.js",
    "revision": "8d0830c1578a5022acc46d0554d32b8b"
  },
  {
    "url": "assets/js/52.eb1ac7ea.js",
    "revision": "4c98eb4bb153ecc43da3972e9cd60036"
  },
  {
    "url": "assets/js/53.3853e8b5.js",
    "revision": "16e8e560529f2a70d5ceaa8509e59cf2"
  },
  {
    "url": "assets/js/54.092a5cd2.js",
    "revision": "65c6f04562ebc5ae45ebea6edbc2166d"
  },
  {
    "url": "assets/js/55.a09da6f0.js",
    "revision": "11df698fcf14c1c1e886f2e255cc32e5"
  },
  {
    "url": "assets/js/56.20b3d24c.js",
    "revision": "658fe721eecad687db9dc857647c326a"
  },
  {
    "url": "assets/js/57.ea30eeb5.js",
    "revision": "3e58b079a47a36c96f5557b99a62ceae"
  },
  {
    "url": "assets/js/58.f72df5a5.js",
    "revision": "d83bb3f1ccb30f155a63c6b7b341d642"
  },
  {
    "url": "assets/js/59.369644fc.js",
    "revision": "ff48208426af6f9e4295bfcbbd93e677"
  },
  {
    "url": "assets/js/6.03fff91f.js",
    "revision": "ac9e30532b0db884dec72f87d0371a71"
  },
  {
    "url": "assets/js/60.94de279b.js",
    "revision": "22230f6ab151f2bbb7a6913f8eda58ab"
  },
  {
    "url": "assets/js/61.da4a90bf.js",
    "revision": "563825ef16382f5309a1791781598cc2"
  },
  {
    "url": "assets/js/62.0384c6f6.js",
    "revision": "856daf80003955589783b8755ee91735"
  },
  {
    "url": "assets/js/63.f0115f59.js",
    "revision": "0c683b3e410ca821b6d64e689f7bacec"
  },
  {
    "url": "assets/js/64.56eb2bba.js",
    "revision": "9d03bc5bcdf4bd528a308d5c1337c7c5"
  },
  {
    "url": "assets/js/65.123c41d0.js",
    "revision": "12c6293c73e5b7b46ec1127f4e7b5742"
  },
  {
    "url": "assets/js/66.265de8da.js",
    "revision": "c54a20351967a808e97e66161078a68e"
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
    "url": "assets/js/app.f710d955.js",
    "revision": "9bdee187f1aec179e3f2123a65d15712"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "45c26c73d3a406fcde8660ffae15371c"
  },
  {
    "url": "categories/HTML/CSS/index.html",
    "revision": "af8795ddb8b334bb98bbea39f6072069"
  },
  {
    "url": "categories/index.html",
    "revision": "33524564f1725eade6db0ea909c04b72"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "25b7451216a6cda5c1a8cbbadfc2aade"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "63b20857c803af94e5f20d30dfd852fb"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "568943c3666808281b9518ca36793b16"
  },
  {
    "url": "categories/Plugin/index.html",
    "revision": "fbf2a7478c464d5ca13bb1f242e4a2ef"
  },
  {
    "url": "categories/SASS/LESS/index.html",
    "revision": "8869c7857c374af3a8d6f47005d97199"
  },
  {
    "url": "categories/Server/index.html",
    "revision": "5e7fba0c2e064dbdf66434c50f92da7e"
  },
  {
    "url": "categories/Tools/index.html",
    "revision": "49079abf11ce16cbfef563f8cd733eb8"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "7f305b7dd51de2a4691af20ac40d52a2"
  },
  {
    "url": "categories/UI/index.html",
    "revision": "a570d5e9e54baf33b9a4c97d8df36c9b"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "45fbb5956caf75bc4f49930913b9ca10"
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
    "revision": "b471713e3fbc26352b567791f4aac14e"
  },
  {
    "url": "tag/index.html",
    "revision": "b7d7835dbc938ff9b6ed755117e27934"
  },
  {
    "url": "tags/Bower/index.html",
    "revision": "16878e1e2bb018e5c583088f9a5e225d"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "917a3cb23c6e096f60edb85702d8a639"
  },
  {
    "url": "tags/CSS3/index.html",
    "revision": "7e7781dce7cb67b441f048b95f6149c1"
  },
  {
    "url": "tags/DOM/index.html",
    "revision": "6d6207ad4b714e865a0ccd7542151f04"
  },
  {
    "url": "tags/ECMAScript 2015/index.html",
    "revision": "d0fef1115afac7a34d7287c080aeffb6"
  },
  {
    "url": "tags/element-ui/index.html",
    "revision": "a634394021eb94c577563d9a9f7e01e8"
  },
  {
    "url": "tags/Event/index.html",
    "revision": "5979a49a3ab21657ae4fe81c0c0c52a4"
  },
  {
    "url": "tags/Excel/index.html",
    "revision": "4a6b589cb444a31fe80d27fdb4b3a890"
  },
  {
    "url": "tags/flex/index.html",
    "revision": "bb8cd20876698a84c399246ffc078450"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "b7f8f51d79a7cc3395a4fc45aeac1801"
  },
  {
    "url": "tags/hack/index.html",
    "revision": "32246d70f0a53e4a5d5c540e624c397f"
  },
  {
    "url": "tags/http/index.html",
    "revision": "b106f6db01b3550216932793da3e9012"
  },
  {
    "url": "tags/IE兼容/index.html",
    "revision": "34f315d6db74b27006bcaa3dfa568b07"
  },
  {
    "url": "tags/IE条件查询/index.html",
    "revision": "a6c8cf14d220ad0c2d5325b1895eb926"
  },
  {
    "url": "tags/Jade/index.html",
    "revision": "7a3f7bb3adf5b5600f8eff5c736d03af"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "3a6b55bc070b316950affe9ef269fbb5"
  },
  {
    "url": "tags/jquery-ui/index.html",
    "revision": "55503526b3d1c689f57ca3455b665270"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "657486bf6aaac53c7d0aad1eb020bfc9"
  },
  {
    "url": "tags/JSON/index.html",
    "revision": "f3f0d4aff0bfc3209def0a07d8470eb1"
  },
  {
    "url": "tags/LESS/index.html",
    "revision": "2add5b24c25e11364e8f95188db9c8f9"
  },
  {
    "url": "tags/loading/index.html",
    "revision": "cff809d1cb91fbec2c3ef4154f6a35fe"
  },
  {
    "url": "tags/MongoDB/index.html",
    "revision": "94c0d3f5b7384038c529308230487775"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "a93396666d0ee770a10850b98948c547"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "ec9ec8771835087fad9411fe72d21264"
  },
  {
    "url": "tags/Public Style/index.html",
    "revision": "85ef9ce5049add6621d9ba89fdd434ff"
  },
  {
    "url": "tags/router/index.html",
    "revision": "3a8934d3500072365ec6cef84a84ae63"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "2b209f6d0b8c1db4e867f2c90394520c"
  },
  {
    "url": "tags/Vue-cli/index.html",
    "revision": "968f57fa9fb5b4ab4be7de8881f370f8"
  },
  {
    "url": "tags/Vuex/index.html",
    "revision": "425b7fafbab32a5cfd3db089bcab1d45"
  },
  {
    "url": "tags/动画/index.html",
    "revision": "871374fd538912f77ce645a92d922e26"
  },
  {
    "url": "tags/原生JS/index.html",
    "revision": "51afeabb115a428265c3aca78f22b8c1"
  },
  {
    "url": "tags/栅格/index.html",
    "revision": "8b079b850f96294890177d0877e763c4"
  },
  {
    "url": "tags/模板引擎/index.html",
    "revision": "0436a57c4d353e9d3f78c265cd08f929"
  },
  {
    "url": "timeline/index.html",
    "revision": "1fb5077421a8b9f85d03ad1f47020a2f"
  },
  {
    "url": "views/database/MongoDB学习笔记.html",
    "revision": "343dee267d96d596396ad9c385e0bd8e"
  },
  {
    "url": "views/html.css/CSS flex 弹性盒模型.html",
    "revision": "2927df8e245354c4fab0244c96056a8a"
  },
  {
    "url": "views/html.css/CSS Hack.html",
    "revision": "5072b1b106c559469490aab35d82889c"
  },
  {
    "url": "views/html.css/CSS-Public-Style.html",
    "revision": "eb98c07f90c004ff81c5e9e062ec6dc7"
  },
  {
    "url": "views/html.css/HTML 页面加载过程.html",
    "revision": "8afe2574d0f71b9a16d9b860be70d185"
  },
  {
    "url": "views/html.css/IE兼容问题总结.html",
    "revision": "16ef437810ef481e734c71df9d40ba3b"
  },
  {
    "url": "views/html.css/Jade 模板引擎.html",
    "revision": "b8c98e21d175aa9133a03e6de731b515"
  },
  {
    "url": "views/html.css/移动端-CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "d71b440bdfade18df7841f95bb03c0ae"
  },
  {
    "url": "views/html.css/移动端-常见问题及解决方案.html",
    "revision": "99cd077fc5c9e45c219eefe784517737"
  },
  {
    "url": "views/html.css/移动端-适配方案.html",
    "revision": "4703bc84fadbd156d9df31909aa496f9"
  },
  {
    "url": "views/javascript/ES6 学习笔记.html",
    "revision": "4f93803ca53c9cdeac4b4a41c5e6ae50"
  },
  {
    "url": "views/javascript/ES6-新增数组操作方法.html",
    "revision": "7781f88e5b537bf69101ef45d80d62c3"
  },
  {
    "url": "views/javascript/JavaScript-DOM事件.html",
    "revision": "034cde63b27de9faa46e92b552119eb9"
  },
  {
    "url": "views/javascript/JavaScript-内置属性与方法.html",
    "revision": "63bb5ffb5b8c6ee9f1fb2ba743436420"
  },
  {
    "url": "views/javascript/JavaScript-字符串.html",
    "revision": "e51c5e72c41df21ff53e0840dc75b5ac"
  },
  {
    "url": "views/javascript/JavaScript-对象属性操作.html",
    "revision": "81e2c9eb80cae4d8cf4f6b4cc1044a30"
  },
  {
    "url": "views/javascript/JavaScript-常用方法封装.html",
    "revision": "13149a93b97614bb3a41b3d1393c1d06"
  },
  {
    "url": "views/javascript/JavaScript-性能优化.html",
    "revision": "d9e208906db1f7369149f0b812e5880b"
  },
  {
    "url": "views/javascript/JavaScript-操作JSON.html",
    "revision": "0e4e159ce353942811c2c9d7cc731664"
  },
  {
    "url": "views/javascript/JavaScript-数组.html",
    "revision": "8098aed7bc19faa3a2ebdb17e0b4b93e"
  },
  {
    "url": "views/javascript/JavaScript-类型检查.html",
    "revision": "274c97ec03c6f4c93762c879855e5256"
  },
  {
    "url": "views/javascript/JavaScript-节点操作.html",
    "revision": "0deed5a10eebbe436f747e75ad8d4aa0"
  },
  {
    "url": "views/javascript/JavaScript-预编译-预解析.html",
    "revision": "83e247e629bcdde60fe1dbe893d55920"
  },
  {
    "url": "views/javascript/异步加载JS.html",
    "revision": "4e568a66624c75c666d93c0cc1b245b7"
  },
  {
    "url": "views/plugin/Axios.html",
    "revision": "005937ce7bf57d2726b95094b916f2a8"
  },
  {
    "url": "views/plugin/Handsontable-在线Excel表格.html",
    "revision": "4e7a854db2ef61f504163f84b71e8c7d"
  },
  {
    "url": "views/plugin/jQuery-对应JavaScript书写.html",
    "revision": "615f308d1cc23fb17d6244033624c7ad"
  },
  {
    "url": "views/plugin/jQuery-常用方法.html",
    "revision": "c91671f45475b61a39e65d37fea6e369"
  },
  {
    "url": "views/plugin/jQuery-插件开发基础.html",
    "revision": "d0b30e057dc48387efdd5e81a1cc3763"
  },
  {
    "url": "views/plugin/Plugin-JS-粒子动画.html",
    "revision": "2b971adb32ca25bd1a5b56010c65132d"
  },
  {
    "url": "views/sass.less/LESS-Grid-实现栅格布局.html",
    "revision": "1029608785979ec1433514b59d2303cb"
  },
  {
    "url": "views/sass.less/LESS-函数方法.html",
    "revision": "2f46b2a37a7bd575eef4ae6369fe3fe9"
  },
  {
    "url": "views/sass.less/LESS-学习总结.html",
    "revision": "cbb6e368f19c530158aec34badf9da7a"
  },
  {
    "url": "views/server/Java-JDBC.html",
    "revision": "e7e836c530387598f5000a357084864a"
  },
  {
    "url": "views/server/Node-js-npm-nrm-nvm.html",
    "revision": "4e93ea5c71abf23aa6e729d5d484af12"
  },
  {
    "url": "views/server/Node-js-事件驱动模型.html",
    "revision": "63e8b32eba9e5fa1b1786bdb3c68b624"
  },
  {
    "url": "views/server/Node-js-模块系统.html",
    "revision": "a5872391fb4481613d487ff10339c4a0"
  },
  {
    "url": "views/tools/Bower-包管理工具.html",
    "revision": "7beca54f1f93894cbe7759b091c7fd04"
  },
  {
    "url": "views/tools/Gulp-构建工具.html",
    "revision": "e154fd41b942407cb70fee43d6d8d40c"
  },
  {
    "url": "views/tools/Tool-Sunny-Ngrok-内网穿透.html",
    "revision": "45da0f815a5a00a580b455f2b5b2b1e3"
  },
  {
    "url": "views/typescript/TypeScript-入门.html",
    "revision": "a0bfd4877748dc55334c459386a011eb"
  },
  {
    "url": "views/ui/Element-UI-分页组件封装.html",
    "revision": "04422e06c01e305ce818f68c6d57802e"
  },
  {
    "url": "views/ui/Element-UI-实现树形选择器.html",
    "revision": "c4dc15048866c30e057ad0a02404ca8e"
  },
  {
    "url": "views/ui/Element-UI-表格动态编辑.html",
    "revision": "fcd3780781cc4ebac46aec164b6984ea"
  },
  {
    "url": "views/ui/jQuery-UI.html",
    "revision": "42387c42f36ed0ca070163a690cf9f60"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（一）构建初始项目.html",
    "revision": "48a931355fe8d48f84865a5c6b3c8eac"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（三）配置 TypeScript.html",
    "revision": "e0c917a284fafcf4bd77ee3306a5dbe8"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（二）设置接口代理.html",
    "revision": "bbc7f566d5a9f86b31730fa3b4785cbf"
  },
  {
    "url": "views/vue/Vue-router 路由.html",
    "revision": "527140db2d18397a355921ae398d0e10"
  },
  {
    "url": "views/vue/Vue-Vuex 状态管理.html",
    "revision": "bc954f4199191892dd3fb83107023954"
  },
  {
    "url": "views/vue/Vue-事件修饰符.html",
    "revision": "87749af78fbaa9c56e2e476d84a095b3"
  },
  {
    "url": "views/vue/Vue-常见问题解决方案.html",
    "revision": "505d632c0782eaf275cd2960a062bcd9"
  },
  {
    "url": "views/vue/Vue-指令.html",
    "revision": "7f9794947c3cc933accae3a2b8814bf5"
  },
  {
    "url": "views/vue/Vue-生命周期钩子.html",
    "revision": "23dc5230269a76cfbbd9ac52755aed5a"
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
