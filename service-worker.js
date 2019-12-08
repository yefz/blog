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
    "revision": "48c4bbddc45409a7c53a60bb5fb46dc4"
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
    "url": "assets/js/19.b39094f3.js",
    "revision": "8ed74b9b47fe365fe5f68c5ce36d3afa"
  },
  {
    "url": "assets/js/20.cac89ec8.js",
    "revision": "7872a6887ca64c3977623ee6e7e5631f"
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
    "url": "assets/js/38.4b4a63e5.js",
    "revision": "57c5e63e0c4e7cc6cfc1534e1afbbfac"
  },
  {
    "url": "assets/js/39.13f1e9fe.js",
    "revision": "2047b64ed76754a1cf2442c6ae6a7d47"
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
    "url": "assets/js/54.c43e9316.js",
    "revision": "f7aa32012c92274ffa3188ad4850c846"
  },
  {
    "url": "assets/js/55.78ea9722.js",
    "revision": "fb684f89b85df601ce9bf67c662c30fe"
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
    "url": "assets/js/63.685ea79f.js",
    "revision": "89803979df2672d7a38234639b26a026"
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
    "url": "assets/js/app.17449e78.js",
    "revision": "fe83be60234bbe6812b4a699c50689a1"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "a0aa97def4450ba24a8e5d798fb38778"
  },
  {
    "url": "categories/HTML/CSS/index.html",
    "revision": "56223b43dcb41a3aa13dfeadcdd21c6c"
  },
  {
    "url": "categories/index.html",
    "revision": "f37e212ec49b5d09be19145467b1bc2e"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "4fa2e5457aa6dfee789a52d6e9aa2002"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "263030a604791f24f0a646f67f890323"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "898ed49484f1f346873c999ae50bfc2f"
  },
  {
    "url": "categories/Plugin/index.html",
    "revision": "33d45b885cd698ca436bac1bf4581e24"
  },
  {
    "url": "categories/SASS/LESS/index.html",
    "revision": "8bec2dd48cfd0e2f460d08438214a1a2"
  },
  {
    "url": "categories/Server/index.html",
    "revision": "0d20a350befe85961e03904ab074f180"
  },
  {
    "url": "categories/Tools/index.html",
    "revision": "35e394541dacf4f8de9734909eb18992"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "6269278293e3eb7cc64e086c6debe507"
  },
  {
    "url": "categories/UI/index.html",
    "revision": "1e702de656d0c1e0f79242df8933d1b6"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "fba5cac7a23361020a3c59bb8e46f047"
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
    "revision": "d254f100972eaa0f605af6df960eff8b"
  },
  {
    "url": "tag/index.html",
    "revision": "d39efedd7dd50d0320063f1c51824957"
  },
  {
    "url": "tags/Bower/index.html",
    "revision": "5c1af4d71fd14d5b5204dfb0158e0bbd"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "2b2c3a1f3621b87667774db3aa183f17"
  },
  {
    "url": "tags/CSS3/index.html",
    "revision": "d1f902f4d4c42b5153598bf7cf90bad7"
  },
  {
    "url": "tags/DOM/index.html",
    "revision": "3a01a88c2712bc7c5c795c7595466023"
  },
  {
    "url": "tags/ECMAScript 2015/index.html",
    "revision": "499e8178d0d0256454f55b8fa8bec565"
  },
  {
    "url": "tags/element-ui/index.html",
    "revision": "f48e5cb375c6fc113e4586dbdb6bf81f"
  },
  {
    "url": "tags/Event/index.html",
    "revision": "2e27365bc0eefd23dce7b7fe0a947e35"
  },
  {
    "url": "tags/flex/index.html",
    "revision": "47a3b394f8d1405b56b7d7ac7e29e575"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "93e37a7b0280088527a709b94e37450b"
  },
  {
    "url": "tags/hack/index.html",
    "revision": "940c01fbd5651c772d87a9be376ef241"
  },
  {
    "url": "tags/http/index.html",
    "revision": "fc665d243719b5b976e5dba52cea2ca2"
  },
  {
    "url": "tags/IE兼容/index.html",
    "revision": "858c6046dae8c2285ecbc971ec0235fb"
  },
  {
    "url": "tags/IE条件查询/index.html",
    "revision": "b33723795291c0cd96cd87d26ac38d96"
  },
  {
    "url": "tags/Jade/index.html",
    "revision": "bbe78c3716e373ba1b8250e06fb1f122"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "ceb8107bb8b1fbd93ba2898f780e9fd8"
  },
  {
    "url": "tags/jquery-ui/index.html",
    "revision": "70e4e439e81313d9d2f42d4c1f938e01"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "556f6f5f3ac2a3fa0a7d29bb337be825"
  },
  {
    "url": "tags/JSON/index.html",
    "revision": "2abd6d2e2cb9cade12be62b1f7b14129"
  },
  {
    "url": "tags/LESS/index.html",
    "revision": "f85f2dedc8a9253e882dcb8948a301d0"
  },
  {
    "url": "tags/loading/index.html",
    "revision": "1ba797a6f5bfe271bdf4da62aa9c5c61"
  },
  {
    "url": "tags/MongoDB/index.html",
    "revision": "8205d642f03073d8e876121978119109"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "545c54b35f19c49a75925a751c731a77"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "ec5c32ca517e7446fef974ce49a382bb"
  },
  {
    "url": "tags/Public Style/index.html",
    "revision": "07a01f004a5ae43d865046bb2015fcc4"
  },
  {
    "url": "tags/router/index.html",
    "revision": "9408db9b65a552795b4f066ee1c4212a"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "3c621e53e8e5cc1b77ff22165cbeb155"
  },
  {
    "url": "tags/Vue-cli/index.html",
    "revision": "a36846d15e0e6d7cc7a481b88dab6b54"
  },
  {
    "url": "tags/Vuex/index.html",
    "revision": "cc42e2d7123d64c6b855e776ce0bad8c"
  },
  {
    "url": "tags/动画/index.html",
    "revision": "16011e6f184ed1c2d2705f6a6269b58d"
  },
  {
    "url": "tags/原生JS/index.html",
    "revision": "22778450fcefae390c4760d64215cd16"
  },
  {
    "url": "tags/栅格/index.html",
    "revision": "17b2e091ddc73cf6ebf866e435185cc0"
  },
  {
    "url": "tags/模板引擎/index.html",
    "revision": "3a3f379f11c5b52271afe26281f969df"
  },
  {
    "url": "timeline/index.html",
    "revision": "deae058ef17e0875a659ea1361e14b37"
  },
  {
    "url": "views/database/MongoDB学习笔记.html",
    "revision": "a7b719db127333f7ba4e3819d7c68fe0"
  },
  {
    "url": "views/html.css/CSS flex 弹性盒模型.html",
    "revision": "60a1d1e58bb4028d7376fc8b52a1560c"
  },
  {
    "url": "views/html.css/CSS Hack.html",
    "revision": "2598ad84ff82c57ed5ad17c432efd700"
  },
  {
    "url": "views/html.css/CSS-Public-Style.html",
    "revision": "186d46a1284703b0c377738142e9b6f1"
  },
  {
    "url": "views/html.css/HTML 页面加载过程.html",
    "revision": "257a09bb045e6db0716ea87fc595d05b"
  },
  {
    "url": "views/html.css/IE兼容问题总结.html",
    "revision": "1602c701dff2092dc351ec17caaae99f"
  },
  {
    "url": "views/html.css/Jade 模板引擎.html",
    "revision": "d0d3e6d81e3cfb197ccc1b4f641bffed"
  },
  {
    "url": "views/html.css/移动端-CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "957b3e2561cb159a6db858e460f45282"
  },
  {
    "url": "views/html.css/移动端-常见问题及解决方案.html",
    "revision": "0caf2860e456d4edd1046c90665ebdef"
  },
  {
    "url": "views/html.css/移动端-适配方案.html",
    "revision": "32b873472aa7c9eb92913825a45fb177"
  },
  {
    "url": "views/javascript/ES6 学习笔记.html",
    "revision": "3f2603f93c4e99a9234018a229cea4ab"
  },
  {
    "url": "views/javascript/ES6-新增数组操作方法.html",
    "revision": "c2aa6c6de9a644c1f7e56a357201ed44"
  },
  {
    "url": "views/javascript/JavaScript-DOM事件.html",
    "revision": "801b41b02ad8a9d5573a491ecbfb2ba6"
  },
  {
    "url": "views/javascript/JavaScript-内置属性与方法.html",
    "revision": "d2f2b1f52d449a4adfd71ac1bee976be"
  },
  {
    "url": "views/javascript/JavaScript-字符串.html",
    "revision": "383eef22d7b150d916ae45ccc79ae557"
  },
  {
    "url": "views/javascript/JavaScript-对象属性操作.html",
    "revision": "f562554b1264fed5247a2815910048a0"
  },
  {
    "url": "views/javascript/JavaScript-常用方法封装.html",
    "revision": "cb091db91b78f4264498ba4e27d8f4b1"
  },
  {
    "url": "views/javascript/JavaScript-性能优化.html",
    "revision": "067600a2699477a3b261fe5df7028072"
  },
  {
    "url": "views/javascript/JavaScript-操作JSON.html",
    "revision": "e6d1395d8f3dc760d8c8658f9f0c3757"
  },
  {
    "url": "views/javascript/JavaScript-数组.html",
    "revision": "52fd7c0ad96dc5bffb5842a4511f70cd"
  },
  {
    "url": "views/javascript/JavaScript-类型检查.html",
    "revision": "06931784f791e431b5352415cf50ec24"
  },
  {
    "url": "views/javascript/JavaScript-节点操作.html",
    "revision": "92b5112972d67aae7a05ea59cc33d7d2"
  },
  {
    "url": "views/javascript/JavaScript-预编译-预解析.html",
    "revision": "4eef7e71930e26a3c9b20a4808c5af39"
  },
  {
    "url": "views/javascript/异步加载JS.html",
    "revision": "c635ed5a7120743d30c9ac2d56b38898"
  },
  {
    "url": "views/plugin/Axios.html",
    "revision": "11ee472e4a263ded4a6105274e8b418b"
  },
  {
    "url": "views/plugin/jQuery-对应JavaScript书写.html",
    "revision": "e67ab5061d9d0e54c128a3f241ee2093"
  },
  {
    "url": "views/plugin/jQuery-常用方法.html",
    "revision": "5bf5b26aab63a1a3fc9244af7e48d928"
  },
  {
    "url": "views/plugin/jQuery-插件开发基础.html",
    "revision": "1c4c0cd89ef07e80cd5ca99958d8a66e"
  },
  {
    "url": "views/plugin/Plugin-JS-粒子动画.html",
    "revision": "ea877bba903acc3adcb2e97fcc6b9bd9"
  },
  {
    "url": "views/sass.less/LESS-Grid-实现栅格布局.html",
    "revision": "03462050375fe58e677bbef3d93843f7"
  },
  {
    "url": "views/sass.less/LESS-函数方法.html",
    "revision": "b21d4c8eadad225ae24a8f8f85361655"
  },
  {
    "url": "views/sass.less/LESS-学习总结.html",
    "revision": "92827d9b0feff4b74c4db35feef2828e"
  },
  {
    "url": "views/server/Java-JDBC.html",
    "revision": "c0672b6299568792afbba6266eb41345"
  },
  {
    "url": "views/server/Node-js-npm-nrm-nvm.html",
    "revision": "e7cc5c44e5648b04ecb6a1df0b2b059a"
  },
  {
    "url": "views/server/Node-js-事件驱动模型.html",
    "revision": "1f89d5f63bf6366ae6b3e1130ca9ff59"
  },
  {
    "url": "views/server/Node-js-模块系统.html",
    "revision": "2c91ed950c4151971ee04a887e43b739"
  },
  {
    "url": "views/tools/Bower-包管理工具.html",
    "revision": "f78e93d85ff86a4d052dc11b3fc64e3c"
  },
  {
    "url": "views/tools/Gulp-构建工具.html",
    "revision": "95d635239cbb099970683086adaf2bf6"
  },
  {
    "url": "views/tools/Tool-Sunny-Ngrok-内网穿透.html",
    "revision": "5cebe066ad558cde7f829301c30f7314"
  },
  {
    "url": "views/typescript/TypeScript-入门.html",
    "revision": "7589f03bdb478375270f18a620fbf3d6"
  },
  {
    "url": "views/ui/Element-UI-分页组件封装.html",
    "revision": "287a9c7a296b6930645af1faa73d0b83"
  },
  {
    "url": "views/ui/Element-UI-实现树形选择器.html",
    "revision": "d868427f74463d973afac5e9e8aef927"
  },
  {
    "url": "views/ui/jQuery-UI.html",
    "revision": "0143f5fd203969ef66cbc6f501f907e7"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（一）构建初始项目.html",
    "revision": "cd450067d40b2968d875d8eb1e9db5a7"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（三）配置 TypeScript.html",
    "revision": "bc5a50b84c70929c20a980a4beca8d77"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（二）设置接口代理.html",
    "revision": "e7c8b96050a30b50f21cf2fba98dff96"
  },
  {
    "url": "views/vue/Vue-router 路由.html",
    "revision": "13909521cf047d82ff2ce23475c1d18c"
  },
  {
    "url": "views/vue/Vue-Vuex 状态管理.html",
    "revision": "442e9066d85c9b4c2f1fc913342b7f9a"
  },
  {
    "url": "views/vue/Vue-事件修饰符.html",
    "revision": "ee3da4b8f2b4576de196ff3ffcc7a146"
  },
  {
    "url": "views/vue/Vue-常见问题解决方案.html",
    "revision": "5307e43b1c4df7a83292589989811915"
  },
  {
    "url": "views/vue/Vue-指令.html",
    "revision": "cd7de55873b8b4b8a4c1505b06da7840"
  },
  {
    "url": "views/vue/Vue-生命周期钩子.html",
    "revision": "0c9f3a439f37e5993424d1d7f2e9ff6a"
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
