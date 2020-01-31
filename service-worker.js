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
    "revision": "2e995b358e7a5d09b334b93fcaf72ee7"
  },
  {
    "url": "assets/css/0.styles.b10153dd.css",
    "revision": "3ac30cfcfda72c49bad46ff4c3f47933"
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
    "url": "assets/js/10.6503858a.js",
    "revision": "b1140eafebb947e0ed30c3387bf1bac4"
  },
  {
    "url": "assets/js/11.11179781.js",
    "revision": "37cac59ced66dab34b0fb0c23baee8ea"
  },
  {
    "url": "assets/js/12.cc0c9c5e.js",
    "revision": "3aa11b8af63cd3d6e0e80fad49a2b796"
  },
  {
    "url": "assets/js/13.63b43239.js",
    "revision": "57ead59bac4f84258b436127fefa2ed4"
  },
  {
    "url": "assets/js/14.bb98b83f.js",
    "revision": "e09586cf9abb170ae0a882377c27b705"
  },
  {
    "url": "assets/js/15.eef80e4c.js",
    "revision": "01ab7c3e66d271b3babc02a6c9b3c544"
  },
  {
    "url": "assets/js/16.60c97040.js",
    "revision": "ee560f81e81d27d534b0d384054e98d3"
  },
  {
    "url": "assets/js/17.b87bc1d0.js",
    "revision": "76712cec336d36992de717cc8eaa1772"
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
    "url": "assets/js/20.219d187f.js",
    "revision": "839978a561cf5ab5f16ea6f24d1730e8"
  },
  {
    "url": "assets/js/21.f38d3d43.js",
    "revision": "78419557f705b0ce365fc0321906988b"
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
    "url": "assets/js/41.1511946e.js",
    "revision": "fac8fe6ef8f87a4462a9964f2b9174e5"
  },
  {
    "url": "assets/js/42.1cae5544.js",
    "revision": "af5b2bd1ad3b7b098a2d1e377fe24efa"
  },
  {
    "url": "assets/js/43.ad4424ee.js",
    "revision": "32faba3b4d4da139f0403b61acaf9d2a"
  },
  {
    "url": "assets/js/44.b379494e.js",
    "revision": "d9647ec710c3000c027629b6caa6b146"
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
    "url": "assets/js/47.b45fd948.js",
    "revision": "582082ea5f450e4cca9d0cc083a4cd76"
  },
  {
    "url": "assets/js/48.19dae7e0.js",
    "revision": "6034cb7114a12c202a03c72d82a8ff8f"
  },
  {
    "url": "assets/js/49.07f16b26.js",
    "revision": "ec5e3e211607bfd751b8d6200af46062"
  },
  {
    "url": "assets/js/5.27ebcc5d.js",
    "revision": "a54dd53b4eeb999ea8ff8f798a26f212"
  },
  {
    "url": "assets/js/50.486ae958.js",
    "revision": "15fbacfa1c584e83c78ee23f03225e0f"
  },
  {
    "url": "assets/js/51.eb93d1c7.js",
    "revision": "df1ed25bb8f67a9f2eea7f115cdf2466"
  },
  {
    "url": "assets/js/52.9026a8a7.js",
    "revision": "75fb40f0c2606e26bb5430148a3ea248"
  },
  {
    "url": "assets/js/53.b6c7f480.js",
    "revision": "0c7ad4a75f6021842529b530114b03d9"
  },
  {
    "url": "assets/js/54.ddeb9f9a.js",
    "revision": "285d9446185a0d15e89b47bbef98aab8"
  },
  {
    "url": "assets/js/55.beabd654.js",
    "revision": "4acfdf66441ac8177e1ffcb50f2d310b"
  },
  {
    "url": "assets/js/56.22f5c448.js",
    "revision": "072651af5401e0e7343c4dc4c663f684"
  },
  {
    "url": "assets/js/57.711aa079.js",
    "revision": "7b0dd172d8146e071a4d94b2cbf42995"
  },
  {
    "url": "assets/js/58.0128ad76.js",
    "revision": "ee5faceac5047099ce532867a7c01b36"
  },
  {
    "url": "assets/js/59.ef91a766.js",
    "revision": "abb74a6b6fbf8246197f07ce3f53c1c3"
  },
  {
    "url": "assets/js/6.7ee2e7b5.js",
    "revision": "b87108df3649bc05d37345f0eed39c81"
  },
  {
    "url": "assets/js/60.08cf0257.js",
    "revision": "03f1402a242319befdd6061b35c4c86e"
  },
  {
    "url": "assets/js/61.725d1160.js",
    "revision": "952769d0c3b6ac532e9906e785ba7d36"
  },
  {
    "url": "assets/js/62.6e18af57.js",
    "revision": "2f1cc36379aa6b78d6542cfa85cb7e77"
  },
  {
    "url": "assets/js/63.dbe16fc4.js",
    "revision": "495547f36729d3e806888ecf8942a523"
  },
  {
    "url": "assets/js/64.f18af2a9.js",
    "revision": "dd17911a7a34dcf281e55fecd0ffdc15"
  },
  {
    "url": "assets/js/65.7b08d007.js",
    "revision": "5aa8c5547ad4a38cc3c8a32b56b98042"
  },
  {
    "url": "assets/js/66.241bef48.js",
    "revision": "4ce2e2fb11892c06bb54c3d93b8a6304"
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
    "url": "assets/js/app.960e46bb.js",
    "revision": "03d936241ee6b701b469fc7bce56f688"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "a2ad0decbfc5964311b1cca97c7776f8"
  },
  {
    "url": "categories/HTML/CSS/index.html",
    "revision": "74fa32e23743544dab6b568d82d3c45b"
  },
  {
    "url": "categories/index.html",
    "revision": "c1ee42a931b9b2e8b05bffae0b56b76e"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "040c51c19aa7de79cc5e05cce8ece753"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "efff37fdba652ad4241a575973436bca"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "c266e08737e2a685596b48783d8e478d"
  },
  {
    "url": "categories/Plugin/index.html",
    "revision": "859fe07608d7b470a1a34885c6ac304c"
  },
  {
    "url": "categories/SASS/LESS/index.html",
    "revision": "e24f87ff56b83c68f9bc150399aeb752"
  },
  {
    "url": "categories/Server/index.html",
    "revision": "5ad77fe808bd707eccf11ccb5206c44b"
  },
  {
    "url": "categories/Tools/index.html",
    "revision": "5923c32b30e402c10ee1b441b8e12085"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "13a8aac9bcc2d38da1a5ff9852ff69d8"
  },
  {
    "url": "categories/UI/index.html",
    "revision": "6fb8d9b39c81eaf45dc1ee8772e92eb0"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "af2d1d561e765fe1f70f02d244d4a28d"
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
    "url": "index.html",
    "revision": "a14c0ac4dba0ad6fb7e701e535de790d"
  },
  {
    "url": "tag/index.html",
    "revision": "1b827a1dea9a5d05e727f5a3e21d3a0a"
  },
  {
    "url": "tags/Bower/index.html",
    "revision": "89741370d27463894aaae767b09fd161"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "e11dc93aa863f48b9ce77f3ff9f2f278"
  },
  {
    "url": "tags/CSS3/index.html",
    "revision": "b6944596aeecb1f1be9e622eb92a683f"
  },
  {
    "url": "tags/DOM/index.html",
    "revision": "45cd5fa1fead4f1f913874891a7dc178"
  },
  {
    "url": "tags/ECMAScript 2015/index.html",
    "revision": "23c3f31221d7344c343408c476900803"
  },
  {
    "url": "tags/element-ui/index.html",
    "revision": "6f07db8d9a2057d53c18d31d7b76d555"
  },
  {
    "url": "tags/Event/index.html",
    "revision": "30fc1544038b9d415455dcecbf996541"
  },
  {
    "url": "tags/Excel/index.html",
    "revision": "abf7e36e8934cd2291a0e281453b92fa"
  },
  {
    "url": "tags/flex/index.html",
    "revision": "592a8047fa7e3d8c13a113f3694a01dd"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "f06fd63f1f9f1e4b2ee914d75f2a0905"
  },
  {
    "url": "tags/hack/index.html",
    "revision": "5982175cbfee801a60ea1d6789947df0"
  },
  {
    "url": "tags/http/index.html",
    "revision": "9e73ded3939e76dc2718baac462d5547"
  },
  {
    "url": "tags/IE兼容/index.html",
    "revision": "d182d27d0d77ab63934c58a36a90b6d4"
  },
  {
    "url": "tags/IE条件查询/index.html",
    "revision": "d71e8db337da05bf99173c8c5ac59b82"
  },
  {
    "url": "tags/Jade/index.html",
    "revision": "da63f2ce8b7276c24bfd227526a1283c"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "1b3081bd97a4198b594bb2cb0d867834"
  },
  {
    "url": "tags/jquery-ui/index.html",
    "revision": "a5f49b24e86bc9cc922f02f9bd878840"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "a50c7da06fdfdc70441ddc5d86e2134b"
  },
  {
    "url": "tags/JSON/index.html",
    "revision": "e520ef9a13ea07b764950e34ad66cfc8"
  },
  {
    "url": "tags/LESS/index.html",
    "revision": "3317a1f86eb8303ffffbb90edb6a4ee3"
  },
  {
    "url": "tags/loading/index.html",
    "revision": "1e3acdcfe5cacde9e6c25fde87f08489"
  },
  {
    "url": "tags/MongoDB/index.html",
    "revision": "54d40ad7c9a05c11cc632f62e7a4689a"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "9f7d0fad7a579dac29c2e27c5987468e"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "9a5c35b119c9e206f132595e270727ec"
  },
  {
    "url": "tags/Public Style/index.html",
    "revision": "2c8fd61befa04182aa110480c4a85d44"
  },
  {
    "url": "tags/router/index.html",
    "revision": "2d21267d19d4703471268b07075aea02"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "39ab17fc9f8b5428f730f1d98e076206"
  },
  {
    "url": "tags/Vue-cli/index.html",
    "revision": "7197aa1dcb1bc70a526b940802e1062b"
  },
  {
    "url": "tags/Vuex/index.html",
    "revision": "92bb34206e702ea15d9592b9eb31a596"
  },
  {
    "url": "tags/动画/index.html",
    "revision": "bfd2bce2ac9c04ca45c1c7412ab147f0"
  },
  {
    "url": "tags/原生JS/index.html",
    "revision": "e417752dd3ddaf0ac37622878747bfd1"
  },
  {
    "url": "tags/栅格/index.html",
    "revision": "7857056c9bf82a643d32a55caf58a021"
  },
  {
    "url": "tags/模板引擎/index.html",
    "revision": "6e9aba0521fdff295fe8915d37adf6dd"
  },
  {
    "url": "timeline/index.html",
    "revision": "fc45b0573face6e19bd36685122be6f9"
  },
  {
    "url": "views/database/MongoDB学习笔记.html",
    "revision": "9920b0e19cb1b71a603a4442b96dc797"
  },
  {
    "url": "views/html.css/CSS flex 弹性盒模型.html",
    "revision": "80ef4f7b0e33cd3ab0a8d20b37287fda"
  },
  {
    "url": "views/html.css/CSS Hack.html",
    "revision": "7db1d07e5d89edafe827f067bd655f3f"
  },
  {
    "url": "views/html.css/CSS-Public-Style.html",
    "revision": "c979dfba1f68f31e337e1861e3b6be88"
  },
  {
    "url": "views/html.css/HTML 页面加载过程.html",
    "revision": "3b6ca188b3e43a3969645c7ef346a1e9"
  },
  {
    "url": "views/html.css/IE兼容问题总结.html",
    "revision": "ee90d501d90d26e0f23171c5b36c67be"
  },
  {
    "url": "views/html.css/Jade 模板引擎.html",
    "revision": "cd7863428c84fcddeaf236e60b5825ed"
  },
  {
    "url": "views/html.css/移动端-CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "641989bebb41a6a706c2867f4c270271"
  },
  {
    "url": "views/html.css/移动端-常见问题及解决方案.html",
    "revision": "8aa699e871dc9adbb61299511b2ba160"
  },
  {
    "url": "views/html.css/移动端-适配方案.html",
    "revision": "d6b28715f365c94f9bc2597126cde247"
  },
  {
    "url": "views/javascript/ES6 学习笔记.html",
    "revision": "9dfcd67a3bbb8660aef598be19b5d2db"
  },
  {
    "url": "views/javascript/ES6-新增数组操作方法.html",
    "revision": "0309a38553e5920e852a38ce94043e4f"
  },
  {
    "url": "views/javascript/JavaScript-DOM事件.html",
    "revision": "82df2242f338bd51c0f85a167f2a4e69"
  },
  {
    "url": "views/javascript/JavaScript-内置属性与方法.html",
    "revision": "381aef2cf016f1f2afdb5184b9164e28"
  },
  {
    "url": "views/javascript/JavaScript-字符串.html",
    "revision": "d7cfa67db34c68ccd5c1e234d1fa5291"
  },
  {
    "url": "views/javascript/JavaScript-对象属性操作.html",
    "revision": "8b925443e5333d3b53630fd9ec200702"
  },
  {
    "url": "views/javascript/JavaScript-常用方法封装.html",
    "revision": "3717b7f5d7a0e448f61b130ee52a9296"
  },
  {
    "url": "views/javascript/JavaScript-性能优化.html",
    "revision": "ab32dbf1a49b5425be52e434ae1e3e6e"
  },
  {
    "url": "views/javascript/JavaScript-操作JSON.html",
    "revision": "69970e2157c297228ec3266aeb55c010"
  },
  {
    "url": "views/javascript/JavaScript-数组.html",
    "revision": "f4ae2f76b3ec9af59776c2a13b18b993"
  },
  {
    "url": "views/javascript/JavaScript-类型检查.html",
    "revision": "c070cd4dc5785b427a168fdc92543fd5"
  },
  {
    "url": "views/javascript/JavaScript-节点操作.html",
    "revision": "840e5b3e4f341e6a488245a00ed908d0"
  },
  {
    "url": "views/javascript/JavaScript-预编译-预解析.html",
    "revision": "1c491a694bbb37f704fe110313ca1255"
  },
  {
    "url": "views/javascript/异步加载JS.html",
    "revision": "39b9bdb455cc971a91c3a2fdf4dd6b09"
  },
  {
    "url": "views/plugin/Axios.html",
    "revision": "c82b20368376934a7c8c80b3d6ff4587"
  },
  {
    "url": "views/plugin/Handsontable-在线Excel表格.html",
    "revision": "d4ef22e5d09b05b9759827a5be738ae0"
  },
  {
    "url": "views/plugin/jQuery-对应JavaScript书写.html",
    "revision": "b66c3a79ca5f564c05a54ef386bdc5e4"
  },
  {
    "url": "views/plugin/jQuery-常用方法.html",
    "revision": "751b24c82f19697b5f5edc33cd63f216"
  },
  {
    "url": "views/plugin/jQuery-插件开发基础.html",
    "revision": "e2820b967bd4f8a612b8de5f30626ee5"
  },
  {
    "url": "views/plugin/Plugin-JS-粒子动画.html",
    "revision": "63d1bce6d3321a7a89f936d76d79233f"
  },
  {
    "url": "views/sass.less/LESS-Grid-实现栅格布局.html",
    "revision": "9407d142f043254860452a6aab579928"
  },
  {
    "url": "views/sass.less/LESS-函数方法.html",
    "revision": "682f0cd5447c1f887d1dda292212301c"
  },
  {
    "url": "views/sass.less/LESS-学习总结.html",
    "revision": "e4b3dcd8deac0902bca0fe2e41196679"
  },
  {
    "url": "views/server/Java-JDBC.html",
    "revision": "113b6dda224e84ddc73c93bb6e8d39bd"
  },
  {
    "url": "views/server/Node-js-npm-nrm-nvm.html",
    "revision": "f948fc0d09258281fb6eaa8cc607e81a"
  },
  {
    "url": "views/server/Node-js-事件驱动模型.html",
    "revision": "e00c476e192a489b07211bb432b2fa51"
  },
  {
    "url": "views/server/Node-js-模块系统.html",
    "revision": "af83b8e6e6cc679f8e796b720d75dddf"
  },
  {
    "url": "views/tools/Bower-包管理工具.html",
    "revision": "bcf16ad58e2e1dc27eb02abe9093d382"
  },
  {
    "url": "views/tools/Gulp-构建工具.html",
    "revision": "7c6c0c823db02b3daeb3a1e878672c4a"
  },
  {
    "url": "views/tools/Tool-Sunny-Ngrok-内网穿透.html",
    "revision": "483fa97195d1f6f483ecc4e5f02b9811"
  },
  {
    "url": "views/typescript/TypeScript-入门.html",
    "revision": "831695add0a378e5a73db11cc9f48bab"
  },
  {
    "url": "views/ui/Element-UI-分页组件封装.html",
    "revision": "af4b7d726ae5fb7c85a39255fa2b441a"
  },
  {
    "url": "views/ui/Element-UI-实现树形选择器.html",
    "revision": "87b218f22c2560fe494f0411f4f41380"
  },
  {
    "url": "views/ui/Element-UI-表格动态编辑.html",
    "revision": "9d40ff61f1a557be1b83c830622bb14e"
  },
  {
    "url": "views/ui/jQuery-UI.html",
    "revision": "cb8b40864627327f501f0ef7146545e4"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（一）构建初始项目.html",
    "revision": "aa22e2eee595d5e5a5ee7b389106ad91"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（三）配置 TypeScript.html",
    "revision": "54a3c73b1c47728b2acbc155fe1ee771"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（二）设置接口代理.html",
    "revision": "d10992972160aeea072deeeea940f130"
  },
  {
    "url": "views/vue/Vue-router 路由.html",
    "revision": "9c40d3487aecc13966420e625e9369ef"
  },
  {
    "url": "views/vue/Vue-Vuex 状态管理.html",
    "revision": "4da8cf28647826f7507396cef467fe33"
  },
  {
    "url": "views/vue/Vue-事件修饰符.html",
    "revision": "1320a70c65fbc4cba3e2c98725cdbddb"
  },
  {
    "url": "views/vue/Vue-常见问题解决方案.html",
    "revision": "2f35abe8d712b652cb6a83dd60fa4c6b"
  },
  {
    "url": "views/vue/Vue-指令.html",
    "revision": "16761e9bbc0979729fb40b83e68a9299"
  },
  {
    "url": "views/vue/Vue-生命周期钩子.html",
    "revision": "7e77bc5428e773bccf0fc81e4fea518d"
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
