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
    "revision": "c0b8034ec7295ab219954d88448b5e3a"
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
    "url": "assets/js/37.897a0d64.js",
    "revision": "76958677c4ab545199820a4394437a2f"
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
    "url": "assets/js/55.428a9ad3.js",
    "revision": "61842850b2763f418e23d62be6a9b93c"
  },
  {
    "url": "assets/js/56.b93c4faf.js",
    "revision": "d210a60b361feca3e035e87275e06d08"
  },
  {
    "url": "assets/js/57.51e3c512.js",
    "revision": "0c49c9866c6e4d3aa1e344881ee3a65f"
  },
  {
    "url": "assets/js/58.97aa3259.js",
    "revision": "225dbb1c86c832fde36a4a1701e65a47"
  },
  {
    "url": "assets/js/59.27b55916.js",
    "revision": "faec5c10c4e89f088c7ce1f17bc404b8"
  },
  {
    "url": "assets/js/6.03fff91f.js",
    "revision": "ac9e30532b0db884dec72f87d0371a71"
  },
  {
    "url": "assets/js/60.26638bc2.js",
    "revision": "23da490459f4ddec3688ee77f16dca67"
  },
  {
    "url": "assets/js/61.0f64fcbb.js",
    "revision": "05e6ac4cd56299b3db108d4969473285"
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
    "url": "assets/js/app.251bee9e.js",
    "revision": "11567577940efe79c06a951cf030be97"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "09f83ce92f0e25032af6d5e7c91aa656"
  },
  {
    "url": "categories/HTML/CSS/index.html",
    "revision": "9a3f695b45697fd6bfa8ef4ba73f4257"
  },
  {
    "url": "categories/index.html",
    "revision": "25c1f5729fe10edb393cb5cbb36af644"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "82346842908ec3705ccb329013245cb7"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "3563a5a1fe87cb19bd8d098387f7c66b"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "b886d61c68edc6d86faf9faadf6f446f"
  },
  {
    "url": "categories/Plugin/index.html",
    "revision": "c296322d14ce741199e1709907a99cde"
  },
  {
    "url": "categories/SASS/LESS/index.html",
    "revision": "dbc6e156f1c24cf6f0e48a9156453ffc"
  },
  {
    "url": "categories/Server/index.html",
    "revision": "a5e88ff4de9098b1dd4c99dc42f5fbf9"
  },
  {
    "url": "categories/Tools/index.html",
    "revision": "9828f32d73e45da04bf6ac9b3b6c16be"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "5bc000bf1b11e4eca4281193f4e84beb"
  },
  {
    "url": "categories/UI/index.html",
    "revision": "910e138266fd2e8809f83e2778b270f1"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "720a11abd6de34b1cc2385746d25be52"
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
    "revision": "05be39551191338315ba53d512caf9e2"
  },
  {
    "url": "tag/index.html",
    "revision": "b89ecc679f071101fb97bc1f844cc0ac"
  },
  {
    "url": "tags/Bower/index.html",
    "revision": "529999be17c28d49d2c765e7e7717788"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "333c6ad0066713849d3248a708bd796b"
  },
  {
    "url": "tags/CSS3/index.html",
    "revision": "32ff66fb8ba553d8b002ff61894a4d62"
  },
  {
    "url": "tags/DOM/index.html",
    "revision": "f29edd6f652253d1fe8f4315147bd4c2"
  },
  {
    "url": "tags/ECMAScript 2015/index.html",
    "revision": "36cd793dd42a75b6f89f8d8f970d476f"
  },
  {
    "url": "tags/element-ui/index.html",
    "revision": "7602928930718693beee4afd7ea42063"
  },
  {
    "url": "tags/Event/index.html",
    "revision": "9bcc1e9bec29e8da64afa2e94af51492"
  },
  {
    "url": "tags/Excel/index.html",
    "revision": "e9a309e66c90f17f00a680f368ff2b0d"
  },
  {
    "url": "tags/flex/index.html",
    "revision": "0928479759714ffce2abe04dafe95b62"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "499de978a3a8464baff1ba5efde2760c"
  },
  {
    "url": "tags/hack/index.html",
    "revision": "c3f50fca18b274e620c2d7ac1bc33a06"
  },
  {
    "url": "tags/http/index.html",
    "revision": "6adc9c9b86e7b0f04969a902053ea209"
  },
  {
    "url": "tags/IE兼容/index.html",
    "revision": "63b8309376114175dfe4df35f69c063d"
  },
  {
    "url": "tags/IE条件查询/index.html",
    "revision": "52dae248d80714ce2b11297197b66ecf"
  },
  {
    "url": "tags/Jade/index.html",
    "revision": "14657806b39572d4b57f86668185c1e7"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "c59033bddf644afb867c6123aebb9663"
  },
  {
    "url": "tags/jquery-ui/index.html",
    "revision": "132c88f657bda504030cceddd685f6ad"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "79e021f60d93d3e9fd5ddb33ea2e99ae"
  },
  {
    "url": "tags/JSON/index.html",
    "revision": "c9789b981d7c58605bf84cfdc46f7128"
  },
  {
    "url": "tags/LESS/index.html",
    "revision": "d759b5843489c0996ac855efbe67af33"
  },
  {
    "url": "tags/loading/index.html",
    "revision": "38b4a127127675c537becd8912fd81f4"
  },
  {
    "url": "tags/MongoDB/index.html",
    "revision": "46d94c2b2f61d13f939af9b3f5a3b3a0"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "1c2edb78074f75230f2055123b07715b"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "d39b3a1aab7ea0aa73be5ca84d1769fe"
  },
  {
    "url": "tags/Public Style/index.html",
    "revision": "98f98b5141a7da1a4b6c87ccee6c0471"
  },
  {
    "url": "tags/router/index.html",
    "revision": "9714b01cc1588bd466c288bd86a168cb"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "1ba359a148440ba6dc0705c518d6c8ab"
  },
  {
    "url": "tags/Vue-cli/index.html",
    "revision": "4dd460572e8fe8183a9ffb4c21c69c68"
  },
  {
    "url": "tags/Vuex/index.html",
    "revision": "f1629f4cfcb16fce9573836ad8401166"
  },
  {
    "url": "tags/动画/index.html",
    "revision": "d7607813dec686a01f00949eaf47f0b9"
  },
  {
    "url": "tags/原生JS/index.html",
    "revision": "61f8714604214dc66362e2c6826922e2"
  },
  {
    "url": "tags/栅格/index.html",
    "revision": "86c7110e4a2ac469adfc01d66c052df8"
  },
  {
    "url": "tags/模板引擎/index.html",
    "revision": "ef7fa9d8df143afad9f038119dec35b4"
  },
  {
    "url": "timeline/index.html",
    "revision": "e4ff16cbafd1d4ae708e55bc5f189bc3"
  },
  {
    "url": "views/database/MongoDB学习笔记.html",
    "revision": "c3237ccf11d982d52bdcca3521270e10"
  },
  {
    "url": "views/html.css/CSS flex 弹性盒模型.html",
    "revision": "f0da944eb549a23c06c93e08fcf9be5a"
  },
  {
    "url": "views/html.css/CSS Hack.html",
    "revision": "4f53928ff6358b9381d4d256ca7ba43b"
  },
  {
    "url": "views/html.css/CSS-Public-Style.html",
    "revision": "81fb8f9dab18ab6ea9b530862598cbdb"
  },
  {
    "url": "views/html.css/HTML 页面加载过程.html",
    "revision": "76c1b50bb6d4085790d695e710869076"
  },
  {
    "url": "views/html.css/IE兼容问题总结.html",
    "revision": "9dfe6ad8ee682beee6c905ce9560693d"
  },
  {
    "url": "views/html.css/Jade 模板引擎.html",
    "revision": "7a01d98af7c265e7358c9d6243f4ad9e"
  },
  {
    "url": "views/html.css/移动端-CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "468dfe67663a8be6b810c4cc8a964dff"
  },
  {
    "url": "views/html.css/移动端-常见问题及解决方案.html",
    "revision": "0b474aeb0544350d218b39235cd1121d"
  },
  {
    "url": "views/html.css/移动端-适配方案.html",
    "revision": "491402c8d3aeee92df8854ba9aba56ca"
  },
  {
    "url": "views/javascript/ES6 学习笔记.html",
    "revision": "4cdeb7ba2b0e05794097554b3a7e9fde"
  },
  {
    "url": "views/javascript/ES6-新增数组操作方法.html",
    "revision": "db753a7117e54f30c8e2c88dba5f06fa"
  },
  {
    "url": "views/javascript/JavaScript-DOM事件.html",
    "revision": "9dd8a9dbd4499a34958c7664bd15dad9"
  },
  {
    "url": "views/javascript/JavaScript-内置属性与方法.html",
    "revision": "0e6cc741069077c65b0aa867b6db3212"
  },
  {
    "url": "views/javascript/JavaScript-字符串.html",
    "revision": "e5163c14d6620dff68e66314ef37e5a6"
  },
  {
    "url": "views/javascript/JavaScript-对象属性操作.html",
    "revision": "c48abf6e48ec0bbe38a273e0126ed5b8"
  },
  {
    "url": "views/javascript/JavaScript-常用方法封装.html",
    "revision": "dddcab367022715734bc43911211cf5d"
  },
  {
    "url": "views/javascript/JavaScript-性能优化.html",
    "revision": "2689a5d89cf4a5a20c42a25a40aecb70"
  },
  {
    "url": "views/javascript/JavaScript-操作JSON.html",
    "revision": "9063525991c523215ec3993f081b4df7"
  },
  {
    "url": "views/javascript/JavaScript-数组.html",
    "revision": "acb60b57aaa1d83b588232516345d592"
  },
  {
    "url": "views/javascript/JavaScript-类型检查.html",
    "revision": "2e95ddbb60d3ced6877d241dfb85c436"
  },
  {
    "url": "views/javascript/JavaScript-节点操作.html",
    "revision": "d992c9a2d72b08ce65d31b8b43590e47"
  },
  {
    "url": "views/javascript/JavaScript-预编译-预解析.html",
    "revision": "93482e041ce42751c81464b7278edfeb"
  },
  {
    "url": "views/javascript/异步加载JS.html",
    "revision": "7bfa069e0ff28587978ec4f40a58ebba"
  },
  {
    "url": "views/plugin/Axios.html",
    "revision": "725b1b8c2ddba67a7d48c83026ec1146"
  },
  {
    "url": "views/plugin/Handsontable-在线Excel表格.html",
    "revision": "3c0f857f395c4e1decabd62e25494793"
  },
  {
    "url": "views/plugin/jQuery-对应JavaScript书写.html",
    "revision": "503cad9b702dc366d5a1d30b9df958c3"
  },
  {
    "url": "views/plugin/jQuery-常用方法.html",
    "revision": "40d52315cc50d105af43431588e195f6"
  },
  {
    "url": "views/plugin/jQuery-插件开发基础.html",
    "revision": "3da94da86ab06a9f9ca3d1997d64a078"
  },
  {
    "url": "views/plugin/Plugin-JS-粒子动画.html",
    "revision": "e6848f0e374ee0ab313483c9b2ec91a5"
  },
  {
    "url": "views/sass.less/LESS-Grid-实现栅格布局.html",
    "revision": "cf0c0808b78bbff2071775617f7a4371"
  },
  {
    "url": "views/sass.less/LESS-函数方法.html",
    "revision": "579e9bdf863891554f10f5c7b22962ed"
  },
  {
    "url": "views/sass.less/LESS-学习总结.html",
    "revision": "159249b9141f7eb10dd52e9becae6156"
  },
  {
    "url": "views/server/Java-JDBC.html",
    "revision": "0394397e61de5b9403c05b12b5f90361"
  },
  {
    "url": "views/server/Node-js-npm-nrm-nvm.html",
    "revision": "7e0af958cd18c6df90b76c10cb0fd3f7"
  },
  {
    "url": "views/server/Node-js-事件驱动模型.html",
    "revision": "30d4e530f1647bbf78cf8e0f89a6936f"
  },
  {
    "url": "views/server/Node-js-模块系统.html",
    "revision": "4d149d70face5249ca691ee768c991d2"
  },
  {
    "url": "views/tools/Bower-包管理工具.html",
    "revision": "0daf674ddffcbb5f0111a953bce38a5a"
  },
  {
    "url": "views/tools/Gulp-构建工具.html",
    "revision": "880c4fe15d37cc4b4349da2b662a1e6b"
  },
  {
    "url": "views/tools/Tool-Sunny-Ngrok-内网穿透.html",
    "revision": "c76f9608dae58916ba440fa56170dc94"
  },
  {
    "url": "views/typescript/TypeScript-入门.html",
    "revision": "2bc9cedb4e368851a4e84a4024af34d4"
  },
  {
    "url": "views/ui/Element-UI-分页组件封装.html",
    "revision": "5a2e5a9b578d6a5b379e968b8cd83216"
  },
  {
    "url": "views/ui/Element-UI-实现树形选择器.html",
    "revision": "f889966926f82599fb75868912618be4"
  },
  {
    "url": "views/ui/jQuery-UI.html",
    "revision": "61cf42c3bbd300deeddab37ebd8ef473"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（一）构建初始项目.html",
    "revision": "d075f746f2a875f0c2e3eaaa36738ef1"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（三）配置 TypeScript.html",
    "revision": "ccb036a1f45d11ce8593aaced99a5f7d"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（二）设置接口代理.html",
    "revision": "f5cd66b0a7252620577c0c56d7039606"
  },
  {
    "url": "views/vue/Vue-router 路由.html",
    "revision": "b2d250a337adb7d6534ce92fba0a3768"
  },
  {
    "url": "views/vue/Vue-Vuex 状态管理.html",
    "revision": "f7e2c8fd5417e69edc60c335ef32b245"
  },
  {
    "url": "views/vue/Vue-事件修饰符.html",
    "revision": "7317e213ad9bdc0095fea4ab69f91d82"
  },
  {
    "url": "views/vue/Vue-常见问题解决方案.html",
    "revision": "1d5f3720845c8e463e02f1d939cd73f3"
  },
  {
    "url": "views/vue/Vue-指令.html",
    "revision": "17871d2a2ba8dc40bb3c0c6a4062b7aa"
  },
  {
    "url": "views/vue/Vue-生命周期钩子.html",
    "revision": "983810b9ae0f68fb2d0239d458fe03ca"
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
