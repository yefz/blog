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
    "revision": "df70f81c849aaadba7411c7796396c20"
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
    "url": "assets/js/38.50407124.js",
    "revision": "59ca541264811f5f5f9fa5187bb29a7b"
  },
  {
    "url": "assets/js/39.471f4b29.js",
    "revision": "4a5678eec58af104d9ebd7f900093af5"
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
    "url": "assets/js/60.a7458ada.js",
    "revision": "dcf9073adcec581fa5795f25b0d0788f"
  },
  {
    "url": "assets/js/61.725d1160.js",
    "revision": "952769d0c3b6ac532e9906e785ba7d36"
  },
  {
    "url": "assets/js/62.b63a0d41.js",
    "revision": "12828b7b58645d35bf53df75895da162"
  },
  {
    "url": "assets/js/63.7663cdc0.js",
    "revision": "284e172eaf92be9d48a9c1a1c3744fe3"
  },
  {
    "url": "assets/js/64.8d9974dc.js",
    "revision": "09a65c218435ff168eb7eba81e4b9b05"
  },
  {
    "url": "assets/js/65.eb505a2a.js",
    "revision": "9be5751763e43ddf1fbe927b8b8772be"
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
    "url": "assets/js/app.021c9280.js",
    "revision": "0bb32ed24649b12bede77a36f14e907f"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "6367902aeeb0c9bf2b3df92798ffbbb4"
  },
  {
    "url": "categories/HTML/CSS/index.html",
    "revision": "9b44612c58f88c14af7967749004cf5b"
  },
  {
    "url": "categories/index.html",
    "revision": "e052c8824769cf0b7c33fab0e903c86b"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "08dc93bf28cf49fbb354e15238a2e429"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "563ca4efd6cdee2fc055469a1b4e08a3"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "1db364e4365841bcf20fc04e91531c9c"
  },
  {
    "url": "categories/Plugin/index.html",
    "revision": "0709b1f93b1f17c9c0f9c91bb5c1f2ee"
  },
  {
    "url": "categories/SASS/LESS/index.html",
    "revision": "92f90a5379e88717d840afc1e6101b04"
  },
  {
    "url": "categories/Server/index.html",
    "revision": "6e2987ad888d2de340360b5e33d7d855"
  },
  {
    "url": "categories/Tools/index.html",
    "revision": "d09347fb6756172c57efc4f0b7d98c88"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "132371ac86c12b92cd4fe836f31ec766"
  },
  {
    "url": "categories/UI/index.html",
    "revision": "683c73eb1f2c8ecd8d3aa86f87eecb19"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "e55eb9878db074aa0c14ca95c1c5065c"
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
    "revision": "d61e3664117b4de62e92ce100578ee94"
  },
  {
    "url": "tag/index.html",
    "revision": "dddc4ca586d5d8a2dbfea16970f3f105"
  },
  {
    "url": "tags/Bower/index.html",
    "revision": "608d2ddbb599532b5b7ba41bb8b8b2ee"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "7c5755d62c528ab477f7eeb43622a3ee"
  },
  {
    "url": "tags/CSS3/index.html",
    "revision": "c41acbc13f26605a7351ec9d3aecdd16"
  },
  {
    "url": "tags/DOM/index.html",
    "revision": "fabe0782cd2086631696e30eb04deb4a"
  },
  {
    "url": "tags/ECMAScript 2015/index.html",
    "revision": "3bd3c303bfca57e97b02cae82b59bdb7"
  },
  {
    "url": "tags/element-ui/index.html",
    "revision": "e674eaaf2f7abf48c56666574b5e5b4e"
  },
  {
    "url": "tags/Event/index.html",
    "revision": "6e2d8c13a86d2778ceee186b381fe0ba"
  },
  {
    "url": "tags/Excel/index.html",
    "revision": "4550ddcd03e3d84eaa6251c0b1aa196b"
  },
  {
    "url": "tags/flex/index.html",
    "revision": "177577cb83b4e9586566db4641b477e5"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "91718e685b81b7fa988718725e5201b9"
  },
  {
    "url": "tags/hack/index.html",
    "revision": "c6971a6560229fb83ae287bf577928b9"
  },
  {
    "url": "tags/http/index.html",
    "revision": "0db8f4df783d6f600cfe3072b774dc38"
  },
  {
    "url": "tags/IE兼容/index.html",
    "revision": "cd0bfe46901d3a1434d199180d2807b7"
  },
  {
    "url": "tags/IE条件查询/index.html",
    "revision": "dac573abbd415f509cf3fad4d45231a5"
  },
  {
    "url": "tags/Jade/index.html",
    "revision": "5cb8f41359766e77b9d18fd9edefc626"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "3084127774df2fbc1be6024a7ddee51c"
  },
  {
    "url": "tags/jquery-ui/index.html",
    "revision": "262f4f3a68036a940940c15a534346c8"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "a12f4c9b5dd1672cb1f55cf6587933ed"
  },
  {
    "url": "tags/JSON/index.html",
    "revision": "b406bc8882ddeb35c202b8d90bd506eb"
  },
  {
    "url": "tags/LESS/index.html",
    "revision": "74499bdad7586e0cfc066886890d483e"
  },
  {
    "url": "tags/loading/index.html",
    "revision": "3bc0849fec673f86fa5dbc12d74e5148"
  },
  {
    "url": "tags/MongoDB/index.html",
    "revision": "f3a63e4f8dddd792f5a7e01b65180fe9"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "de24b0e263d938c207d0042d062b4fa9"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "8f862b3d48f0277a9e53bfe94c1e0d03"
  },
  {
    "url": "tags/Public Style/index.html",
    "revision": "c7b6cdd40800a9896e90dfdaba2e766d"
  },
  {
    "url": "tags/router/index.html",
    "revision": "2bffa146e1abfd708b5233390e07bec0"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "a8feebdf6cacece1e48848c53fd2d550"
  },
  {
    "url": "tags/Vue-cli/index.html",
    "revision": "c5d911716fc54b2ea52db919976242dd"
  },
  {
    "url": "tags/Vuex/index.html",
    "revision": "80b6b13af4195e3aac6c9fa2f85a01a3"
  },
  {
    "url": "tags/动画/index.html",
    "revision": "8153c18b1d79c72aad71ddbc2602298f"
  },
  {
    "url": "tags/原生JS/index.html",
    "revision": "113c435896c71f7ae134d2763595568b"
  },
  {
    "url": "tags/栅格/index.html",
    "revision": "83ba7b19f2ffa11f9daa87575e5753de"
  },
  {
    "url": "tags/模板引擎/index.html",
    "revision": "1df05c3dca406864246e724eac74bf9b"
  },
  {
    "url": "timeline/index.html",
    "revision": "9d919770dba7f496f37a6a5f0b1c5281"
  },
  {
    "url": "views/database/MongoDB学习笔记.html",
    "revision": "57f08e8ae9e062fbed9d99339df652f5"
  },
  {
    "url": "views/html.css/CSS flex 弹性盒模型.html",
    "revision": "0987ee457c16c2fde6c7c7780a3e4a4e"
  },
  {
    "url": "views/html.css/CSS Hack.html",
    "revision": "4dd06a70f750ba0b065833f25548ab3f"
  },
  {
    "url": "views/html.css/CSS-Public-Style.html",
    "revision": "5fc8f40448d2f8ac41bd93b5ba294363"
  },
  {
    "url": "views/html.css/HTML 页面加载过程.html",
    "revision": "80153c72fcc292008cbcf05952d3ba3e"
  },
  {
    "url": "views/html.css/IE兼容问题总结.html",
    "revision": "3f594b7d77650d2c47544f5a83798b69"
  },
  {
    "url": "views/html.css/Jade 模板引擎.html",
    "revision": "f2210beca43a17f1dfd5ce65346e85cd"
  },
  {
    "url": "views/html.css/移动端-CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "f66be17716d3eb35f019eddc93ca7aec"
  },
  {
    "url": "views/html.css/移动端-常见问题及解决方案.html",
    "revision": "fe28bbb9d640e29095fb83185e793a32"
  },
  {
    "url": "views/html.css/移动端-适配方案.html",
    "revision": "3e98e411337a30ac887c062ab7f0da9c"
  },
  {
    "url": "views/javascript/ES6 学习笔记.html",
    "revision": "1cd4490656907be14e14b7d0eb5e1eb4"
  },
  {
    "url": "views/javascript/ES6-新增数组操作方法.html",
    "revision": "dbb838b16e4ecf870bb97875eb58fb07"
  },
  {
    "url": "views/javascript/JavaScript-DOM事件.html",
    "revision": "9d34cac000558597d61d588510636ce2"
  },
  {
    "url": "views/javascript/JavaScript-内置属性与方法.html",
    "revision": "bf38b635c8bed76655a464348b2408b6"
  },
  {
    "url": "views/javascript/JavaScript-字符串.html",
    "revision": "026e07739551e6a8222a19503dbe6db4"
  },
  {
    "url": "views/javascript/JavaScript-对象属性操作.html",
    "revision": "c420e0bc4cd7e00325cc35e014ee60fb"
  },
  {
    "url": "views/javascript/JavaScript-常用方法封装.html",
    "revision": "6efd60474c5a38319aee46c0d947e2c2"
  },
  {
    "url": "views/javascript/JavaScript-性能优化.html",
    "revision": "7dba7ec2d1dcc95e85a638bf367d2df8"
  },
  {
    "url": "views/javascript/JavaScript-操作JSON.html",
    "revision": "920eb93097c7a36183a5534a1e97412e"
  },
  {
    "url": "views/javascript/JavaScript-数组.html",
    "revision": "8eb0cbd8d882c73fd9c85c3ea7e5b482"
  },
  {
    "url": "views/javascript/JavaScript-类型检查.html",
    "revision": "3952f50e3ce18d7dfb16f598a5e5c102"
  },
  {
    "url": "views/javascript/JavaScript-节点操作.html",
    "revision": "ba7022d8f9c4d5524ae72161c3ddc9b8"
  },
  {
    "url": "views/javascript/JavaScript-预编译-预解析.html",
    "revision": "516f22c009f419293332ffd0124e1d31"
  },
  {
    "url": "views/javascript/异步加载JS.html",
    "revision": "89ccd6f16fcfe31d03eb87182c1277ab"
  },
  {
    "url": "views/plugin/Axios.html",
    "revision": "0848f6a54ced0f0516f8b4b612c5e972"
  },
  {
    "url": "views/plugin/Handsontable-在线Excel表格.html",
    "revision": "91975895a8a9a50b34e3f8679b24ce2c"
  },
  {
    "url": "views/plugin/jQuery-对应JavaScript书写.html",
    "revision": "59dfab0a592218d568c5c9f5fd5e5ca1"
  },
  {
    "url": "views/plugin/jQuery-常用方法.html",
    "revision": "ceee67ebaef0653a0493e7e5b2a8f01b"
  },
  {
    "url": "views/plugin/jQuery-插件开发基础.html",
    "revision": "e6b56ff5632a978fc73d4e66b9ac1fa7"
  },
  {
    "url": "views/plugin/Plugin-JS-粒子动画.html",
    "revision": "aecefc0c03e50f91fe5e356356c96f31"
  },
  {
    "url": "views/sass.less/LESS-Grid-实现栅格布局.html",
    "revision": "90ba494ec14201659af9bcdcac442d8d"
  },
  {
    "url": "views/sass.less/LESS-函数方法.html",
    "revision": "6a6edb98e5741e81b81408c26c63e279"
  },
  {
    "url": "views/sass.less/LESS-学习总结.html",
    "revision": "e616118e52545daa6c2df9d028a88b04"
  },
  {
    "url": "views/server/Java-JDBC.html",
    "revision": "b6401dd4669d9497a7bf8edbd940cf7e"
  },
  {
    "url": "views/server/Node-js-npm-nrm-nvm.html",
    "revision": "6acf08ebf3c632f557112061f7a4924b"
  },
  {
    "url": "views/server/Node-js-事件驱动模型.html",
    "revision": "ce555ca9f6592828faa72d7b6c7dec43"
  },
  {
    "url": "views/server/Node-js-模块系统.html",
    "revision": "d162a51a14c844ab3b622383c8ebbff1"
  },
  {
    "url": "views/tools/Bower-包管理工具.html",
    "revision": "a9f79e454fe2fe879b78952fc18cddfe"
  },
  {
    "url": "views/tools/Gulp-构建工具.html",
    "revision": "75588d7ca128858ff5e84391c668fbeb"
  },
  {
    "url": "views/tools/Tool-Sunny-Ngrok-内网穿透.html",
    "revision": "1854a818497456ebf6f82d4fec290e68"
  },
  {
    "url": "views/typescript/TypeScript-入门.html",
    "revision": "c12383982b4582b9d04fa93eaa3ce2cf"
  },
  {
    "url": "views/ui/Element-UI-分页组件封装.html",
    "revision": "c05412bff5171c6ff487a5d10f63f536"
  },
  {
    "url": "views/ui/Element-UI-实现树形选择器.html",
    "revision": "3bdeea47e78c3a96571b3c7b4c378144"
  },
  {
    "url": "views/ui/Element-UI-表格动态编辑.html",
    "revision": "52611d9873f109822d425157f26eb386"
  },
  {
    "url": "views/ui/jQuery-UI.html",
    "revision": "38a1cbbda91a0fa6aa8def0b234690fc"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（一）构建初始项目.html",
    "revision": "80b6d8bb52ee02e6b10b635e5189ad38"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（三）配置 TypeScript.html",
    "revision": "5730f0bb26739eb085b5763e93726bf6"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（二）设置接口代理.html",
    "revision": "9e1a4c9997e210fd2f4ce3c03096c3c2"
  },
  {
    "url": "views/vue/Vue-router 路由.html",
    "revision": "84a27946b606d373fe01b8bc6ccf5bc2"
  },
  {
    "url": "views/vue/Vue-Vuex 状态管理.html",
    "revision": "fe3ac96ac8bbbea5f2c793fbdc9f5a84"
  },
  {
    "url": "views/vue/Vue-事件修饰符.html",
    "revision": "e235b0dd520f4fc8f5dbf2975b7f160c"
  },
  {
    "url": "views/vue/Vue-常见问题解决方案.html",
    "revision": "03a3ef69cfcd65ef376ae480fdefb655"
  },
  {
    "url": "views/vue/Vue-指令.html",
    "revision": "c536984314357a0aa0d3f6d40e26e687"
  },
  {
    "url": "views/vue/Vue-生命周期钩子.html",
    "revision": "944239945f85e0b6eb4bac2dd05eefc4"
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
