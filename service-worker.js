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
    "revision": "7f22514c7354459342b431e4625e15a7"
  },
  {
    "url": "assets/css/0.styles.b58c999a.css",
    "revision": "779474cfe96a110c849bcdd1f95df408"
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
    "url": "assets/js/11.d7a69f30.js",
    "revision": "6a387f70721bf3e1701358fc822ea280"
  },
  {
    "url": "assets/js/12.69d6763f.js",
    "revision": "e62ad5db6d324e91ac968a6a1fed4d99"
  },
  {
    "url": "assets/js/13.4fa38b69.js",
    "revision": "d9207e866db414602adf7ce7e93f6f85"
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
    "url": "assets/js/18.74dfa859.js",
    "revision": "b1035063143b2630cbe658ad1186f7e6"
  },
  {
    "url": "assets/js/19.4d45ae09.js",
    "revision": "d6a398fcb51779790e78a9363d8fb018"
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
    "url": "assets/js/64.64642785.js",
    "revision": "9e9ceea4b8f64c66240ba77075056c39"
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
    "url": "assets/js/app.9de3d636.js",
    "revision": "57ade33eb1027f377f8e9e313c294ee1"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "12de300261a4d69c3521aba8caf1af96"
  },
  {
    "url": "categories/HTML/CSS/index.html",
    "revision": "dc1bef8656748434d140de27c32cb762"
  },
  {
    "url": "categories/index.html",
    "revision": "d2cab08615ae53c6307a35c6f0b075ab"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "21e6477dcb038950960659ede0e4d926"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "07ae5683edd3fc731345872c98232eee"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "53bfb45ed26a4226fb3d40b9296bbba8"
  },
  {
    "url": "categories/Plugin/index.html",
    "revision": "5738048b96aa2a55ec8540c0bd0fc6df"
  },
  {
    "url": "categories/SASS/LESS/index.html",
    "revision": "c33030689e757322ab4c01ed4b40cec5"
  },
  {
    "url": "categories/Server/index.html",
    "revision": "591635d3e004b0ea76027e5f8cbf9330"
  },
  {
    "url": "categories/Tools/index.html",
    "revision": "510e281e0dbcad59469e67f588cffba5"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "c7574edacbd612c0e33edf58c483a55d"
  },
  {
    "url": "categories/UI/index.html",
    "revision": "ba6e77ab96accbb05735010568eed500"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "e41dd3554253efeafa7bec27374c35f9"
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
    "revision": "392dd8de353aacae0f5945c87a10aef9"
  },
  {
    "url": "tag/index.html",
    "revision": "6648af93c7386a2fe480babe1f57a35b"
  },
  {
    "url": "tags/Bower/index.html",
    "revision": "2faa142b428ece00d464f7aa9b8d8488"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "6dc8e97e7fb2c87a6c7eae8eb239c340"
  },
  {
    "url": "tags/CSS3/index.html",
    "revision": "3f2820ed3bb12ba6e78578ca60a843e8"
  },
  {
    "url": "tags/DOM/index.html",
    "revision": "13da5c64cc8a4e74ed7d8d953190249b"
  },
  {
    "url": "tags/ECMAScript 2015/index.html",
    "revision": "f46be96423ca2d21793d04e9df07dc8a"
  },
  {
    "url": "tags/element-ui/index.html",
    "revision": "67b8082c5e012d0c32e15509967830bd"
  },
  {
    "url": "tags/Event/index.html",
    "revision": "8ff13bd6d3b56cf6192ae8038f08874d"
  },
  {
    "url": "tags/Excel/index.html",
    "revision": "b087ebf4925289d8b7eae7eae904fa8d"
  },
  {
    "url": "tags/flex/index.html",
    "revision": "1f75c55cd4065d656fcbc87f7f3b731b"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "16a564a7110b79bcdaeabe48f7dcc1b5"
  },
  {
    "url": "tags/hack/index.html",
    "revision": "84cf04fdc962d6a0a4ad0b130d2bfa1b"
  },
  {
    "url": "tags/http/index.html",
    "revision": "0d3ef4950fefd633dc8e0a886ffcc64e"
  },
  {
    "url": "tags/IE兼容/index.html",
    "revision": "23d7526f81ccc47c03ffaed9870b57cb"
  },
  {
    "url": "tags/IE条件查询/index.html",
    "revision": "5b29ed8f762f1499c8bf69cec1c32068"
  },
  {
    "url": "tags/Jade/index.html",
    "revision": "eeb3483f0de37ae13cd1441735ffef75"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "db2d9c4309c30262bf97204660ac8455"
  },
  {
    "url": "tags/jquery-ui/index.html",
    "revision": "c4a515d556d7d354c2f323ce76a99200"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "9a2e7ce3e7955ec7792d4d75726a007b"
  },
  {
    "url": "tags/JSON/index.html",
    "revision": "e614d7a6e9e69f21a1e55faffd8d5df8"
  },
  {
    "url": "tags/LESS/index.html",
    "revision": "44f2f31ab8a6a11fa4b202bdfc0917b9"
  },
  {
    "url": "tags/loading/index.html",
    "revision": "98fdb86da192978c4cb8e522c3b01172"
  },
  {
    "url": "tags/MongoDB/index.html",
    "revision": "bf7f5b576c7f48ad67a89ed9a530c266"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "e8e2e8a7d105f755c065f14ebffcfcdd"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "26fda7bc9cc9318ef46b70050f43ca05"
  },
  {
    "url": "tags/Public Style/index.html",
    "revision": "186b03133683d1eac6aa5aab77202029"
  },
  {
    "url": "tags/router/index.html",
    "revision": "f928eb863033772c1a95751336996860"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "11b23b49ce278fe9d6a5d0e72cea226b"
  },
  {
    "url": "tags/Vue-cli/index.html",
    "revision": "c198e0c76639cbd164f0aab730efe2d8"
  },
  {
    "url": "tags/Vuex/index.html",
    "revision": "755ffca223be6083efea8ce1af5eec8f"
  },
  {
    "url": "tags/动画/index.html",
    "revision": "246d957fd017cd6f19db3a9d90c06bef"
  },
  {
    "url": "tags/原生JS/index.html",
    "revision": "d4b5787fd6f992eb66ae62bd2f3a484b"
  },
  {
    "url": "tags/栅格/index.html",
    "revision": "f949ed6b2bb5d18bbdb9adf4c08d2354"
  },
  {
    "url": "tags/模板引擎/index.html",
    "revision": "629d132af2958a5f6320bc01581d6ed1"
  },
  {
    "url": "timeline/index.html",
    "revision": "039c05a3e7d0316cb113aea3a69bd039"
  },
  {
    "url": "views/database/MongoDB学习笔记.html",
    "revision": "2f19eb4dd01ea81ebaecc681a9199b1d"
  },
  {
    "url": "views/html.css/CSS flex 弹性盒模型.html",
    "revision": "1a5d7daeea174be946cb3d8b6ea058c7"
  },
  {
    "url": "views/html.css/CSS Hack.html",
    "revision": "8085104861f311d007820504d9e30613"
  },
  {
    "url": "views/html.css/CSS-Public-Style.html",
    "revision": "d19df93ff4fbab51c2116a83d612eeb5"
  },
  {
    "url": "views/html.css/HTML 页面加载过程.html",
    "revision": "3012770b03c099d20fb23686fb725ea7"
  },
  {
    "url": "views/html.css/IE兼容问题总结.html",
    "revision": "da5de0e3336fad41703f43364f64afa8"
  },
  {
    "url": "views/html.css/Jade 模板引擎.html",
    "revision": "eb107858d729d88cbbf739d3858533c5"
  },
  {
    "url": "views/html.css/移动端-CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "926e6bc714350b697c01631b250628a7"
  },
  {
    "url": "views/html.css/移动端-常见问题及解决方案.html",
    "revision": "aee9291508f05d1c8c2d140d2e3fc297"
  },
  {
    "url": "views/html.css/移动端-适配方案.html",
    "revision": "a5498e2f986cdf877c41c056cd7192bc"
  },
  {
    "url": "views/javascript/ES6 学习笔记.html",
    "revision": "3500afbebf5c605f310c4043cba9403d"
  },
  {
    "url": "views/javascript/ES6-新增数组操作方法.html",
    "revision": "df4c87ed10307303680b4f72d355d675"
  },
  {
    "url": "views/javascript/JavaScript-DOM事件.html",
    "revision": "f67a9df8caf302eaa0f12c44a483b44e"
  },
  {
    "url": "views/javascript/JavaScript-内置属性与方法.html",
    "revision": "1de8c3597710137770f9e14bbb577347"
  },
  {
    "url": "views/javascript/JavaScript-字符串.html",
    "revision": "36cc63d5a54260e593fab026a64445cd"
  },
  {
    "url": "views/javascript/JavaScript-对象属性操作.html",
    "revision": "976ea4736b86b7c948ab63dfd3eadca8"
  },
  {
    "url": "views/javascript/JavaScript-常用方法封装.html",
    "revision": "99df24a704cae5b08cfcec9e03b1a376"
  },
  {
    "url": "views/javascript/JavaScript-性能优化.html",
    "revision": "541172646617fc296c3946b932dfa365"
  },
  {
    "url": "views/javascript/JavaScript-操作JSON.html",
    "revision": "2f5d882ea26cd1001cc483094b5aa0bf"
  },
  {
    "url": "views/javascript/JavaScript-数组.html",
    "revision": "6110bda7cd8d11c9e59e8ffcdc87998f"
  },
  {
    "url": "views/javascript/JavaScript-类型检查.html",
    "revision": "17025080af7b90b201a63f063a0592cf"
  },
  {
    "url": "views/javascript/JavaScript-节点操作.html",
    "revision": "1aaddf1d48fccc66162de43bc0c50dac"
  },
  {
    "url": "views/javascript/JavaScript-预编译-预解析.html",
    "revision": "c7a1caa19aacff6bfba697050e3ebc9d"
  },
  {
    "url": "views/javascript/异步加载JS.html",
    "revision": "28e5fb72068f8d155efdaee655db0243"
  },
  {
    "url": "views/plugin/Axios.html",
    "revision": "ebda5f97501b3e8f6f0317dfc222cb8f"
  },
  {
    "url": "views/plugin/Handsontable-在线Excel表格.html",
    "revision": "a20aaa3ec5be22fa3e49e5791d5e0851"
  },
  {
    "url": "views/plugin/jQuery-对应JavaScript书写.html",
    "revision": "186d388d3adbb00506a16f5021e0bef4"
  },
  {
    "url": "views/plugin/jQuery-常用方法.html",
    "revision": "433287cffccb5968e92ed65607952bc0"
  },
  {
    "url": "views/plugin/jQuery-插件开发基础.html",
    "revision": "265f59fd6e7ac142ec1c61939818aa92"
  },
  {
    "url": "views/plugin/Plugin-JS-粒子动画.html",
    "revision": "47690bb013229864c3fcbf0d315600d2"
  },
  {
    "url": "views/sass.less/LESS-Grid-实现栅格布局.html",
    "revision": "dd92a49c085ac0144f5dc62593c2b995"
  },
  {
    "url": "views/sass.less/LESS-函数方法.html",
    "revision": "a0568d0a3342169dd9f51e5cc8bd66b4"
  },
  {
    "url": "views/sass.less/LESS-学习总结.html",
    "revision": "f357f3b35cd1a060f7fe9fd8507167cb"
  },
  {
    "url": "views/server/Java-JDBC.html",
    "revision": "622f567eec4df43c120b56129bb6d5fc"
  },
  {
    "url": "views/server/Node-js-npm-nrm-nvm.html",
    "revision": "6f7425668c815d407f157a89087e4250"
  },
  {
    "url": "views/server/Node-js-事件驱动模型.html",
    "revision": "1ffef547c7d3d1ee278376c179cc8765"
  },
  {
    "url": "views/server/Node-js-模块系统.html",
    "revision": "3553f7493d8be6f7eb11dc0005a75c0f"
  },
  {
    "url": "views/tools/Bower-包管理工具.html",
    "revision": "bec29c54a47cbb80a0135f2aacc300fb"
  },
  {
    "url": "views/tools/Gulp-构建工具.html",
    "revision": "abd2c798c9876d31ac1c287b945c119f"
  },
  {
    "url": "views/tools/Tool-Sunny-Ngrok-内网穿透.html",
    "revision": "62927836a39144d6ea88c0f456e7e0a3"
  },
  {
    "url": "views/typescript/TypeScript-入门.html",
    "revision": "c67145bacf133d0acd69753db1d99cf8"
  },
  {
    "url": "views/ui/Element-UI-分页组件封装.html",
    "revision": "6a235d4477b6eff0ea9b75d138e4e8fd"
  },
  {
    "url": "views/ui/Element-UI-实现树形选择器.html",
    "revision": "8d83f7d25f63534b259a59cd5ac57ac9"
  },
  {
    "url": "views/ui/Element-UI-表格动态编辑.html",
    "revision": "79234b6d24ef619904268bf800eed6cf"
  },
  {
    "url": "views/ui/jQuery-UI.html",
    "revision": "54164402bf97f4853d24098a62f97d00"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（一）构建初始项目.html",
    "revision": "e4b32c7983949a1467e2220b1e8cea22"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（三）配置 TypeScript.html",
    "revision": "6f195fb1870eba146396f055df953977"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（二）设置接口代理.html",
    "revision": "6174f16ea65b8f81c342b966319c212b"
  },
  {
    "url": "views/vue/Vue-router 路由.html",
    "revision": "b2b0531e76dde7daa6859553eb5c0477"
  },
  {
    "url": "views/vue/Vue-Vuex 状态管理.html",
    "revision": "d9f28c5ab76ebe31c12a5de3b4eb3922"
  },
  {
    "url": "views/vue/Vue-事件修饰符.html",
    "revision": "cceecb9e44ebd7940fb03f23a0e7e4b0"
  },
  {
    "url": "views/vue/Vue-常见问题解决方案.html",
    "revision": "0d42c9c4d1a4e0002cb76c99712a6ed0"
  },
  {
    "url": "views/vue/Vue-指令.html",
    "revision": "1470f09e57f58b4bebd97b56178b0c71"
  },
  {
    "url": "views/vue/Vue-生命周期钩子.html",
    "revision": "907e2c06420b14cb40ccbac487f74de1"
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
