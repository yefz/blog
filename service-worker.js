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
    "revision": "e3ba2a771e2e910e6c5d3dcbd7ae6298"
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
    "url": "assets/js/1.c4fa30eb.js",
    "revision": "47166bddb977ace74810c32276b065b2"
  },
  {
    "url": "assets/js/10.af5e8d34.js",
    "revision": "cc2d8d6da2751654dfcd76bf00ccdd80"
  },
  {
    "url": "assets/js/11.ab9d252a.js",
    "revision": "8a7bb2f129966185144214cfcaf91ad9"
  },
  {
    "url": "assets/js/12.039fb708.js",
    "revision": "d562006c143ee51276dae797e104aacc"
  },
  {
    "url": "assets/js/13.a6e43b5e.js",
    "revision": "077257e86cfd10bbb445845da59739ad"
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
    "url": "assets/js/29.1cd0d25d.js",
    "revision": "d10f806904cda4b916cc3fc9431d3392"
  },
  {
    "url": "assets/js/3.5060e329.js",
    "revision": "d179221ff37a9d40aca00c20613fe864"
  },
  {
    "url": "assets/js/30.8af782e1.js",
    "revision": "06ce050d44a86f347a00f22a9c71a9ad"
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
    "url": "assets/js/33.91b1f638.js",
    "revision": "fdec50012fe8020d7324d7cf075babc6"
  },
  {
    "url": "assets/js/34.ee7be4b2.js",
    "revision": "3b053742fe6ac26f437c59cf14b1d2c6"
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
    "url": "assets/js/4.3c8c7fde.js",
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
    "url": "assets/js/44.06d84bb6.js",
    "revision": "2852c65e7e0bb6e0f74e8961b7a1b676"
  },
  {
    "url": "assets/js/45.d934a363.js",
    "revision": "8cc2beffdd7286f1ba3bf7bae5bc03b3"
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
    "url": "assets/js/5.48db4cd5.js",
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
    "url": "assets/js/52.7707552a.js",
    "revision": "7226a400a84a028e9f73b5e6a34a1593"
  },
  {
    "url": "assets/js/53.91c8c174.js",
    "revision": "37cc0153567ddcd0b988a227fe889a21"
  },
  {
    "url": "assets/js/54.aa8102a1.js",
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
    "url": "assets/js/59.71d3add5.js",
    "revision": "6ba0cb2231ec45968bd024b27448fc15"
  },
  {
    "url": "assets/js/6.03fff91f.js",
    "revision": "ac9e30532b0db884dec72f87d0371a71"
  },
  {
    "url": "assets/js/60.58dd9ac2.js",
    "revision": "6ccc1125d785b4cca2b22b2670afc5ae"
  },
  {
    "url": "assets/js/61.ffcae70f.js",
    "revision": "b0af56c54fc25d1eba90b374eca01676"
  },
  {
    "url": "assets/js/62.79132a44.js",
    "revision": "7abfa66396b4df7d9f029d61744b4ff6"
  },
  {
    "url": "assets/js/63.b7a6cac4.js",
    "revision": "314a74fd851865af035bfe3b7dd68f4c"
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
    "url": "assets/js/app.35007b31.js",
    "revision": "88dc75404c566315fc03a64d617d2541"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "ab8a3232ca40d88f6221dedb80d60c8c"
  },
  {
    "url": "categories/HTML/CSS/index.html",
    "revision": "3bdb53d99bac56cd6a571533155894ec"
  },
  {
    "url": "categories/index.html",
    "revision": "e22edaf24bc0e347d3f7958b1c62985a"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "8716c61f7c223371ae3fe2cea155725b"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "fc3e71019bc3e8fb6a3f903b8d8dbb34"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "cad96f2fa5747e1b1db8a5cc0ecdb4be"
  },
  {
    "url": "categories/Plugin/index.html",
    "revision": "f7f5f8d59fcafd03357dfda1176c5775"
  },
  {
    "url": "categories/SASS/LESS/index.html",
    "revision": "7dbf1acf0c26e2eb1dc07083ef2d1db7"
  },
  {
    "url": "categories/Server/index.html",
    "revision": "69d0ff983ca992ab1cd1d3f3ebc49813"
  },
  {
    "url": "categories/Tools/index.html",
    "revision": "c9b0c7e3e4cb9fff779137752c767ac3"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "5bba05c7eb012dd70871a220a119df94"
  },
  {
    "url": "categories/UI/index.html",
    "revision": "4563a0e50001f28e19252890d18f720e"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "93ff5e6beefb6c6bb9b0bf7743590954"
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
    "revision": "832144996efa5a3e719d50749aa0dcb4"
  },
  {
    "url": "tag/index.html",
    "revision": "5a45e50ff0acc3087a67287e61d4508d"
  },
  {
    "url": "tags/Bower/index.html",
    "revision": "997e12209bfab01132dfb6d03b41e84e"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "c8bd3875b452d1345126e163a02eab45"
  },
  {
    "url": "tags/CSS3/index.html",
    "revision": "56dcf9bd8d373e96904cfe76f52a3de6"
  },
  {
    "url": "tags/DOM/index.html",
    "revision": "d85ed5b4840976ee073b64fba75a5915"
  },
  {
    "url": "tags/ECMAScript 2015/index.html",
    "revision": "f03aac3d764dbd0a353699a58d6da2a8"
  },
  {
    "url": "tags/element-ui/index.html",
    "revision": "5315c8bc095982cd7e1805429fba0924"
  },
  {
    "url": "tags/Event/index.html",
    "revision": "5c67652099f74e9af482bb6059372eb4"
  },
  {
    "url": "tags/flex/index.html",
    "revision": "b1e7deab2ce8251d2e5a3afe391dbd13"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "4ebce09198b0b55a91537722f51664b3"
  },
  {
    "url": "tags/hack/index.html",
    "revision": "3c9d8f39e7eab60cf0343dd6a220f980"
  },
  {
    "url": "tags/http/index.html",
    "revision": "ed1acb5f86f1c92e2a2beb9b484e8af9"
  },
  {
    "url": "tags/IE兼容/index.html",
    "revision": "24dd426da4427acca02e0ede39941aae"
  },
  {
    "url": "tags/IE条件查询/index.html",
    "revision": "faaa977918763ad30e9b2672a5b5c22f"
  },
  {
    "url": "tags/Jade/index.html",
    "revision": "3c7bfd386ba72fb5a930c70d1c43fb0c"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "c7a5e208926a6f61e26d2c7df292772b"
  },
  {
    "url": "tags/jquery-ui/index.html",
    "revision": "4d500dea056fd417efd7d083095e6ad2"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "1c01aa55636a20c52ab84f2175cf3f79"
  },
  {
    "url": "tags/JSON/index.html",
    "revision": "f8670205bfe96ed7cdb5d0ee3c4c3d93"
  },
  {
    "url": "tags/LESS/index.html",
    "revision": "b544c41244d61ecc6036e1df34b5189b"
  },
  {
    "url": "tags/loading/index.html",
    "revision": "597dcecafa1a5824e81ede605556212c"
  },
  {
    "url": "tags/MongoDB/index.html",
    "revision": "4b71d60c37d41fffb22ea7161d48c07e"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "bdafd435f62e7e2f74343366125ce9be"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "005aae11e0619e5c6c9ca2d83dc0a5ce"
  },
  {
    "url": "tags/Public Style/index.html",
    "revision": "0b21e6471dfab94a1ed41a03e64a96b8"
  },
  {
    "url": "tags/router/index.html",
    "revision": "87b2f5d1ae51a822b69895b93e070fbe"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "ec51140e64b871c46236c6ad047a2e4d"
  },
  {
    "url": "tags/Vue-cli/index.html",
    "revision": "bbc56fea6174dbf8383a171689c7c66e"
  },
  {
    "url": "tags/Vuex/index.html",
    "revision": "427b159e87a06374c5fd95e9f95b42aa"
  },
  {
    "url": "tags/动画/index.html",
    "revision": "07127b406f812ebf44c596e551967e26"
  },
  {
    "url": "tags/原生JS/index.html",
    "revision": "14344a6ca221a8cc5d98c2913f0e10d5"
  },
  {
    "url": "tags/栅格/index.html",
    "revision": "5848a7202138a3ec88c46c7a9c8d2bed"
  },
  {
    "url": "tags/模板引擎/index.html",
    "revision": "0b36b76373b489ad27d8201393153d51"
  },
  {
    "url": "timeline/index.html",
    "revision": "3e1a45f6a9f355159d5713284c5586ff"
  },
  {
    "url": "views/database/MongoDB学习笔记.html",
    "revision": "8505e58d9c061a79f619da28f4ca0821"
  },
  {
    "url": "views/html.css/CSS flex 弹性盒模型.html",
    "revision": "b5c889fcc4a6899bd73cfda70a8c34b4"
  },
  {
    "url": "views/html.css/CSS Hack.html",
    "revision": "d52f5ae644e0d99cf97fa115ca8e2c7b"
  },
  {
    "url": "views/html.css/CSS-Public-Style.html",
    "revision": "e842e884e5d51d1cfeea05ef9dadf684"
  },
  {
    "url": "views/html.css/HTML 页面加载过程.html",
    "revision": "b24392488da7893bfdb41711b4a573b9"
  },
  {
    "url": "views/html.css/IE兼容问题总结.html",
    "revision": "40ecbd876392b2c21dba8f18bf0af218"
  },
  {
    "url": "views/html.css/Jade 模板引擎.html",
    "revision": "400a4a7aacf3e30686fd95b07ffb721f"
  },
  {
    "url": "views/html.css/移动端-CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "30df985e04032599d22bc2982bad91c7"
  },
  {
    "url": "views/html.css/移动端-常见问题及解决方案.html",
    "revision": "7b1b205f0f2c9d6f8e6548789351aaa9"
  },
  {
    "url": "views/html.css/移动端-适配方案.html",
    "revision": "f19db6151421cb97fc06766d6c646226"
  },
  {
    "url": "views/javascript/ES6 学习笔记.html",
    "revision": "88074b98650b81c8c10c2434d873d003"
  },
  {
    "url": "views/javascript/ES6-新增数组操作方法.html",
    "revision": "d1469661819ddfafa8a391455829b25a"
  },
  {
    "url": "views/javascript/JavaScript-DOM事件.html",
    "revision": "3c218f0d6d11e165b0f8577c4b9a314e"
  },
  {
    "url": "views/javascript/JavaScript-内置属性与方法.html",
    "revision": "bffae9617d5e2d13aa79ddbb3849c794"
  },
  {
    "url": "views/javascript/JavaScript-字符串.html",
    "revision": "06c6d775da7d86ca24208d46be2deeb5"
  },
  {
    "url": "views/javascript/JavaScript-对象属性操作.html",
    "revision": "71369a74d54e87ad8adbe012d22ebb0e"
  },
  {
    "url": "views/javascript/JavaScript-常用方法封装.html",
    "revision": "8ac4930f424d4cf27e0e3ccb9981cd31"
  },
  {
    "url": "views/javascript/JavaScript-性能优化.html",
    "revision": "293421570887d21a708997b3da8bcb77"
  },
  {
    "url": "views/javascript/JavaScript-操作JSON.html",
    "revision": "3126c3ff30e497d5f5ae2446c9617375"
  },
  {
    "url": "views/javascript/JavaScript-数组.html",
    "revision": "c2ff2e8be75930475ad508da8b70e3b2"
  },
  {
    "url": "views/javascript/JavaScript-类型检查.html",
    "revision": "55b374f25652de5e4c0c9278cb45be56"
  },
  {
    "url": "views/javascript/JavaScript-节点操作.html",
    "revision": "4184f8abe7bfd20655a440b0d5621e0c"
  },
  {
    "url": "views/javascript/JavaScript-预编译-预解析.html",
    "revision": "4721b5779791bcbc908bdd93c7e4d416"
  },
  {
    "url": "views/javascript/异步加载JS.html",
    "revision": "a0682e48b524c576e2d3b330f2ee5129"
  },
  {
    "url": "views/plugin/Axios.html",
    "revision": "82adb9a73ebb481bfb10a9a735d3534d"
  },
  {
    "url": "views/plugin/jQuery-对应JavaScript书写.html",
    "revision": "5e95e2a8b9e0db0f799c7cc1edd14ddb"
  },
  {
    "url": "views/plugin/jQuery-常用方法.html",
    "revision": "b49b27ab81acccd16d79211254e15740"
  },
  {
    "url": "views/plugin/jQuery-插件开发基础.html",
    "revision": "9f5970af6643a65157c1d317b03e2627"
  },
  {
    "url": "views/plugin/Plugin-JS-粒子动画.html",
    "revision": "079f287dfb8fea57f436c2a29f36784d"
  },
  {
    "url": "views/sass.less/LESS-Grid-实现栅格布局.html",
    "revision": "6ed1032f874042c8c2fb1fe13293027f"
  },
  {
    "url": "views/sass.less/LESS-函数方法.html",
    "revision": "283b610fa94c03e4fb324808e9077064"
  },
  {
    "url": "views/sass.less/LESS-学习总结.html",
    "revision": "a344c2f926eee4ed80914312ef82d030"
  },
  {
    "url": "views/server/Java-JDBC.html",
    "revision": "1046dd208c102a620469601192f58f20"
  },
  {
    "url": "views/server/Node-js-npm-nrm-nvm.html",
    "revision": "586b9621d2fb891c045d83b95f14ebb4"
  },
  {
    "url": "views/server/Node-js-事件驱动模型.html",
    "revision": "0e85ad6362f9140c8d988cc267808f15"
  },
  {
    "url": "views/server/Node-js-模块系统.html",
    "revision": "65a5eeaba97da03037e1e2ab208e749b"
  },
  {
    "url": "views/tools/Bower-包管理工具.html",
    "revision": "be856bba2cc44f3e4fd6dc3ebddd9614"
  },
  {
    "url": "views/tools/Gulp-构建工具.html",
    "revision": "af6329c960f567db9f3be61be9ef1e8c"
  },
  {
    "url": "views/tools/Tool-Sunny-Ngrok-内网穿透.html",
    "revision": "5d7c8dccb1f06a7ea31ed18df73309ba"
  },
  {
    "url": "views/typescript/TypeScript-入门.html",
    "revision": "9aa69a13ef1ade6949350a4f12175776"
  },
  {
    "url": "views/ui/Element-UI-分页组件封装.html",
    "revision": "59de1b40740cc6bab44aee83c7a64d78"
  },
  {
    "url": "views/ui/Element-UI-实现树形选择器.html",
    "revision": "e62c1163a0b6990c3ddbc54ba97a2d34"
  },
  {
    "url": "views/ui/jQuery-UI.html",
    "revision": "9df880a07ef9df5dca654d6ce81157b5"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（一）构建初始项目.html",
    "revision": "a93c456867e421189a1d67bd709123c8"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（三）配置 TypeScript.html",
    "revision": "35aaa575d81670356ad38a7aeb8b3a95"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（二）设置接口代理.html",
    "revision": "25f650e653a67571e1b186f27f65c43e"
  },
  {
    "url": "views/vue/Vue-router 路由.html",
    "revision": "3c5bb87adc90324c73837980a3a287e8"
  },
  {
    "url": "views/vue/Vue-Vuex 状态管理.html",
    "revision": "3b4e4e8b544e876a996df0143534f272"
  },
  {
    "url": "views/vue/Vue-事件修饰符.html",
    "revision": "aa1c6c69606dea209c6cdeb54d1a4d57"
  },
  {
    "url": "views/vue/Vue-常见问题解决方案.html",
    "revision": "dd2e479538ca011a2b9573718c097584"
  },
  {
    "url": "views/vue/Vue-指令.html",
    "revision": "f0ae1da40a04525d755004f4d73656d8"
  },
  {
    "url": "views/vue/Vue-生命周期钩子.html",
    "revision": "922d65aa6ac28852ece3baf2e9b63840"
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
