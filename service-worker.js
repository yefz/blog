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
    "revision": "ba8305066dcf6d6b3519278d99877f4b"
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
    "url": "assets/js/10.9b041e07.js",
    "revision": "a3bb8e185a159449aec55711e9ffdd18"
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
    "url": "assets/js/17.47a55999.js",
    "revision": "cd9e09965b4c04e59d244f4e7dd4c75b"
  },
  {
    "url": "assets/js/18.3d74c9e1.js",
    "revision": "08798ff78607c16b7024e60351df68f3"
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
    "url": "assets/js/37.b7a3b547.js",
    "revision": "eda9055e7b83076be717b16f6593f6cc"
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
    "url": "assets/js/41.4e08bbac.js",
    "revision": "45b048e1915c9bf41f7961f8a19ed6d4"
  },
  {
    "url": "assets/js/42.71c4a2db.js",
    "revision": "b2f5ebcc1be26ec94fa88dc4ecabac6c"
  },
  {
    "url": "assets/js/43.6fd7520b.js",
    "revision": "76c5fc4173147f56b65b2f47a05efe9b"
  },
  {
    "url": "assets/js/44.64e7c86a.js",
    "revision": "7df47140c0b6e22d04a8f380e73f0354"
  },
  {
    "url": "assets/js/45.ad2b4f49.js",
    "revision": "400ea96070a1b7026d0982fb83c0ba02"
  },
  {
    "url": "assets/js/46.6420fbee.js",
    "revision": "cbff372ff977d3313c3101407a1666f1"
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
    "url": "assets/js/55.428a9ad3.js",
    "revision": "61842850b2763f418e23d62be6a9b93c"
  },
  {
    "url": "assets/js/56.b93c4faf.js",
    "revision": "d210a60b361feca3e035e87275e06d08"
  },
  {
    "url": "assets/js/57.82123254.js",
    "revision": "45c05d0e8836cb6af45638a822275591"
  },
  {
    "url": "assets/js/58.97aa3259.js",
    "revision": "225dbb1c86c832fde36a4a1701e65a47"
  },
  {
    "url": "assets/js/59.fa8ec5aa.js",
    "revision": "4a625460fea9d2b7ac79f7342ba81491"
  },
  {
    "url": "assets/js/6.03fff91f.js",
    "revision": "ac9e30532b0db884dec72f87d0371a71"
  },
  {
    "url": "assets/js/60.893c08cb.js",
    "revision": "97e96f18520c92d250ad531a819b86e8"
  },
  {
    "url": "assets/js/61.cf2ce32a.js",
    "revision": "ab6ca806bc7210de65457b15ed84750e"
  },
  {
    "url": "assets/js/62.42e8cab7.js",
    "revision": "e934fde8d7314dc230a1d4660186b44e"
  },
  {
    "url": "assets/js/63.9c712518.js",
    "revision": "8aaf8b272267b4c7a18bf64fd41b73c0"
  },
  {
    "url": "assets/js/64.85c9bdb6.js",
    "revision": "bde54e2dafa2ab044970adcf1ad00d27"
  },
  {
    "url": "assets/js/65.3bc0a7a1.js",
    "revision": "8e987ec9eaeaa94c2dbb6d10e9a3c904"
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
    "url": "assets/js/app.133e180d.js",
    "revision": "7e422124b17f4a271e7ce9c84689d857"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "1676bafa381fbeeabd589317e825755e"
  },
  {
    "url": "categories/HTML/CSS/index.html",
    "revision": "3ce54bdcdbb6d65551e9965ae964286c"
  },
  {
    "url": "categories/index.html",
    "revision": "4482331a6060f776d472b90f76377186"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "4f3b9ef175386d022a08cb9cb9db5855"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "6c81bd0d0f22b9acb6c295fb98502da2"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "5a3e83a22569b37ad18bc353fbc1493a"
  },
  {
    "url": "categories/Plugin/index.html",
    "revision": "d42b20084578835303ca0b7bc8dc3a14"
  },
  {
    "url": "categories/SASS/LESS/index.html",
    "revision": "77f536286f28514dbcc65f8b12cdd365"
  },
  {
    "url": "categories/Server/index.html",
    "revision": "69b30b3bb86c957bae3198090bf72d60"
  },
  {
    "url": "categories/Tools/index.html",
    "revision": "32377ce818ccd038dfad6c2a7b05dab0"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "a40a3e97ef1a56b020066a55d07109ff"
  },
  {
    "url": "categories/UI/index.html",
    "revision": "7380451bffbecdd070ad62ff74a0724c"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "0101e3e9f838d8b8904f01db333b7a38"
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
    "revision": "7e4ed1ff1db9bd3d586a6c2aa8ac674d"
  },
  {
    "url": "tag/index.html",
    "revision": "1c272b608b0b51e57025434850180e11"
  },
  {
    "url": "tags/Bower/index.html",
    "revision": "7673d4cadcc5806d5e907756256f9568"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "d98c883d9c9aec34096d85b86fc19080"
  },
  {
    "url": "tags/CSS3/index.html",
    "revision": "d511d444c0326f29ab9417d35f8acd1a"
  },
  {
    "url": "tags/DOM/index.html",
    "revision": "4323f2518c26413322e6bffebfd23c6c"
  },
  {
    "url": "tags/ECMAScript 2015/index.html",
    "revision": "8b18a1fb27d00bb2bd108be8227b78ae"
  },
  {
    "url": "tags/element-ui/index.html",
    "revision": "7197dd9737dfa334754f94da9a5e472a"
  },
  {
    "url": "tags/Event/index.html",
    "revision": "b7d40d472c5674fe5f8471be545f9811"
  },
  {
    "url": "tags/Excel/index.html",
    "revision": "6d6862ab935624bccf341010edd8b407"
  },
  {
    "url": "tags/flex/index.html",
    "revision": "c5624bb1fe116aaaea1eb4f4b22a1a44"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "dc7afa7e5ffacdbf3860d136c7adeca9"
  },
  {
    "url": "tags/hack/index.html",
    "revision": "4f9ae09ea73441a257296a67be203216"
  },
  {
    "url": "tags/http/index.html",
    "revision": "56724bcb6c620d1bc89efafdd8fc438d"
  },
  {
    "url": "tags/IE兼容/index.html",
    "revision": "f29c8a27f4b5e8057a76dcba2d461795"
  },
  {
    "url": "tags/IE条件查询/index.html",
    "revision": "e8bd6e1ff579cc99c541ec0aa8c6f04b"
  },
  {
    "url": "tags/Jade/index.html",
    "revision": "9315d5a7bd7c00fabaa160d4d85e5c5e"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "74d4f83ee65e45edb87ae53c042be96a"
  },
  {
    "url": "tags/jquery-ui/index.html",
    "revision": "dd48682bd224494ef81b073b259812c8"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "a6533c1a972799d300f1b4f14a936037"
  },
  {
    "url": "tags/JSON/index.html",
    "revision": "0ba7673203f601492f9d6812915d8306"
  },
  {
    "url": "tags/LESS/index.html",
    "revision": "3945fdc6fea1ba5a44c1eafc6c103954"
  },
  {
    "url": "tags/loading/index.html",
    "revision": "6bf68622b4f2a20c1c8230bba8fd244b"
  },
  {
    "url": "tags/MongoDB/index.html",
    "revision": "fe3cda5bd2ffc3ec0f9f68e82710683a"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "83b9ea14327c33258b1d2b915c0b4dc0"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "659b81e0513b6ad7b51f8da86d8b71ef"
  },
  {
    "url": "tags/Public Style/index.html",
    "revision": "18ee26ba2a56df58224af2e01903bab5"
  },
  {
    "url": "tags/router/index.html",
    "revision": "85a7170b7a1924e5e273b524cf8b4916"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "ea200fdca27bc03bcbb804ad20bd1b9f"
  },
  {
    "url": "tags/Vue-cli/index.html",
    "revision": "01aab4447529593ad1fc0d92ff4df905"
  },
  {
    "url": "tags/Vuex/index.html",
    "revision": "e0c4241a5ca3da1ef4d72f8e811767ab"
  },
  {
    "url": "tags/动画/index.html",
    "revision": "706ff3a90ffd22d37ab4b3f12932f480"
  },
  {
    "url": "tags/原生JS/index.html",
    "revision": "e23b20c79b03265034c9a180a7175125"
  },
  {
    "url": "tags/栅格/index.html",
    "revision": "4afa1fc24e26c8ebd080159dad8b0cac"
  },
  {
    "url": "tags/模板引擎/index.html",
    "revision": "b03e3fbb2ec6130f53c8d629da640890"
  },
  {
    "url": "timeline/index.html",
    "revision": "c4f7bf4e2ed61212f94fd2fa6663a1f3"
  },
  {
    "url": "views/database/MongoDB学习笔记.html",
    "revision": "b38eb6701e63741d41307d9044188c07"
  },
  {
    "url": "views/html.css/CSS flex 弹性盒模型.html",
    "revision": "1466f01b3c4e0f6f52bb7bbb0f4b460c"
  },
  {
    "url": "views/html.css/CSS Hack.html",
    "revision": "7cc242816543aedd5e03167914b3bdfc"
  },
  {
    "url": "views/html.css/CSS-Public-Style.html",
    "revision": "e7234116d820fac445308670160f967f"
  },
  {
    "url": "views/html.css/HTML 页面加载过程.html",
    "revision": "407240ae10984c29ca5dadbe34dba20a"
  },
  {
    "url": "views/html.css/IE兼容问题总结.html",
    "revision": "c88fb2e87ece0df31988c0d2e92b3ab6"
  },
  {
    "url": "views/html.css/Jade 模板引擎.html",
    "revision": "ea50f48894fa7bbf55ffecf8d0159078"
  },
  {
    "url": "views/html.css/移动端-CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "92245f687fabac378c3a285e0b8b452f"
  },
  {
    "url": "views/html.css/移动端-常见问题及解决方案.html",
    "revision": "86bb617a5c2fbdb0139f25ca95169741"
  },
  {
    "url": "views/html.css/移动端-适配方案.html",
    "revision": "cba60ed5d842249e4f653d4c94a1a7f7"
  },
  {
    "url": "views/javascript/ES6 学习笔记.html",
    "revision": "81f1c0a9fae5da91ad42759fb24bc3dd"
  },
  {
    "url": "views/javascript/ES6-新增数组操作方法.html",
    "revision": "834c95491710b53460459dc11b6e36cf"
  },
  {
    "url": "views/javascript/JavaScript-DOM事件.html",
    "revision": "28538901c8fd742d9c97b110941a3aa9"
  },
  {
    "url": "views/javascript/JavaScript-内置属性与方法.html",
    "revision": "16c5a67518f88b080098ea396d31fa3b"
  },
  {
    "url": "views/javascript/JavaScript-字符串.html",
    "revision": "b5bedc29908ffd938effec893df5b77d"
  },
  {
    "url": "views/javascript/JavaScript-对象属性操作.html",
    "revision": "76e6cca0d6d5473a7863fb231de8aaee"
  },
  {
    "url": "views/javascript/JavaScript-常用方法封装.html",
    "revision": "c6eb12eb75bc54f6e7438e0becb246cc"
  },
  {
    "url": "views/javascript/JavaScript-性能优化.html",
    "revision": "040aa4e4ec21172136cada31a47651e5"
  },
  {
    "url": "views/javascript/JavaScript-操作JSON.html",
    "revision": "6fee06da1d3b35763928dc6afb1eed6a"
  },
  {
    "url": "views/javascript/JavaScript-数组.html",
    "revision": "91952c3bed99a33c70875237f333b7b8"
  },
  {
    "url": "views/javascript/JavaScript-类型检查.html",
    "revision": "12e8f52bcb6865667b0ca7d9d8bf4776"
  },
  {
    "url": "views/javascript/JavaScript-节点操作.html",
    "revision": "8bb6349b9511667c5988427975b50599"
  },
  {
    "url": "views/javascript/JavaScript-预编译-预解析.html",
    "revision": "e0ea04512c47a8501dcb4f85b6a34822"
  },
  {
    "url": "views/javascript/异步加载JS.html",
    "revision": "804b28a9d5c945d2b3c75401d61257f1"
  },
  {
    "url": "views/plugin/Axios.html",
    "revision": "5c384b609152ce75a442e36a049a313e"
  },
  {
    "url": "views/plugin/Handsontable-在线Excel表格.html",
    "revision": "69f78c3e8172ce4b9adb47745894a771"
  },
  {
    "url": "views/plugin/jQuery-对应JavaScript书写.html",
    "revision": "3d25c3db6e92d3432cb65bede7b47a53"
  },
  {
    "url": "views/plugin/jQuery-常用方法.html",
    "revision": "c6684099cdae39ef9d1723d00cc91cd4"
  },
  {
    "url": "views/plugin/jQuery-插件开发基础.html",
    "revision": "beb2ab18d10d6e797c06ee54d0061b40"
  },
  {
    "url": "views/plugin/Plugin-JS-粒子动画.html",
    "revision": "537888d0adb562941715ca94f7ac545d"
  },
  {
    "url": "views/sass.less/LESS-Grid-实现栅格布局.html",
    "revision": "99d361cf843e5c5c5a302be9338b41bc"
  },
  {
    "url": "views/sass.less/LESS-函数方法.html",
    "revision": "e37fd4e444c3775d716cd9af26f4b73c"
  },
  {
    "url": "views/sass.less/LESS-学习总结.html",
    "revision": "d1847b07b816d823154960d62b6679b3"
  },
  {
    "url": "views/server/Java-JDBC.html",
    "revision": "6b53bae4341050cb7f30e7626074e921"
  },
  {
    "url": "views/server/Node-js-npm-nrm-nvm.html",
    "revision": "b1fbfc2f2c8c2ef2b4383ad068725f21"
  },
  {
    "url": "views/server/Node-js-事件驱动模型.html",
    "revision": "bd0e098d28dac7b70eaeb2e5ee6de114"
  },
  {
    "url": "views/server/Node-js-模块系统.html",
    "revision": "1afc980680303e56f07f8e987c2d6ec0"
  },
  {
    "url": "views/tools/Bower-包管理工具.html",
    "revision": "697e3e5d53f2c889606833a8ef2d83de"
  },
  {
    "url": "views/tools/Gulp-构建工具.html",
    "revision": "675cfb2506dc9cd4e4642f20a345dae2"
  },
  {
    "url": "views/tools/Tool-Sunny-Ngrok-内网穿透.html",
    "revision": "3cf3cc9115d5273b3b1409671cc2c07b"
  },
  {
    "url": "views/typescript/TypeScript-入门.html",
    "revision": "596fb2ca1e5bf33e6aee60898a49824a"
  },
  {
    "url": "views/ui/Element-UI-分页组件封装.html",
    "revision": "6bbef6cb989ed046bbc5c00b88e1ad45"
  },
  {
    "url": "views/ui/Element-UI-实现树形选择器.html",
    "revision": "8c998c85937012f154e4d0c0fd96ae28"
  },
  {
    "url": "views/ui/jQuery-UI.html",
    "revision": "870007c2b7f3b0bf68371ae1d2986530"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（一）构建初始项目.html",
    "revision": "ba6f350f3086b2e6ee0393852e7579e4"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（三）配置 TypeScript.html",
    "revision": "e022ca7195b859c998c85291776d17f5"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（二）设置接口代理.html",
    "revision": "2f0471f06e6c6aa3a508b85ccb111ce2"
  },
  {
    "url": "views/vue/Vue-router 路由.html",
    "revision": "0d7394b67d877b89ca037db1d27254b6"
  },
  {
    "url": "views/vue/Vue-Vuex 状态管理.html",
    "revision": "5140eafb64ca18b9c83d4ca4556327d4"
  },
  {
    "url": "views/vue/Vue-事件修饰符.html",
    "revision": "33ea0b65031783ea54b4809352e7d18b"
  },
  {
    "url": "views/vue/Vue-常见问题解决方案.html",
    "revision": "4f63cec594df1f5e6e0f4f52d1febe95"
  },
  {
    "url": "views/vue/Vue-指令.html",
    "revision": "ad10b14d5fb1ef772c34f5dd64d0add0"
  },
  {
    "url": "views/vue/Vue-生命周期钩子.html",
    "revision": "7cd7f50f80ae4e18d980be1a15fe4fcd"
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
