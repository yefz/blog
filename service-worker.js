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
    "revision": "0a46d69e96871850f461824597653844"
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
    "url": "assets/js/58.c9e738b0.js",
    "revision": "d576a7ff56932791ee92707c8ee97491"
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
    "url": "assets/js/60.907776bc.js",
    "revision": "ee68c144cf778417b2eacf5a93f44aa0"
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
    "url": "assets/js/63.9c7063c9.js",
    "revision": "56391d1e590fd83f897c6f8cf3ba6784"
  },
  {
    "url": "assets/js/64.8d9974dc.js",
    "revision": "09a65c218435ff168eb7eba81e4b9b05"
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
    "url": "assets/js/app.9cffdb9b.js",
    "revision": "ea89c9154ede7f749f74c0d477e8cbc7"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "f50b88c3fb97ed9a5605a563a06a7294"
  },
  {
    "url": "categories/HTML/CSS/index.html",
    "revision": "f6eddfe2dface3e5bde404cb25a642d2"
  },
  {
    "url": "categories/index.html",
    "revision": "58261aa9da33ef203d22b52d95b6ef9e"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "6d65b6fc10f597d2e3f76fc8a8b15a2c"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "7150b29dabe9a51944c81a598c6c0e3a"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "23bf738a7d55391de011ce1f7f4ee3dd"
  },
  {
    "url": "categories/Plugin/index.html",
    "revision": "6a599428965cee713459d1db84821a95"
  },
  {
    "url": "categories/SASS/LESS/index.html",
    "revision": "3a36bd8270c7872be80f08e6f84053a3"
  },
  {
    "url": "categories/Server/index.html",
    "revision": "922a613483ceabbad6ce1966be26af32"
  },
  {
    "url": "categories/Tools/index.html",
    "revision": "8c451fd7247bfe65e7ab629bf96f1985"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "8e3249f624a3f3ff81a0b49fc2f564ee"
  },
  {
    "url": "categories/UI/index.html",
    "revision": "56466873e3ae9dd507a5b2a312de2cc8"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "18845a4fd0c3fd048700da8f04faf4f8"
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
    "revision": "43e7ec5f245b19267a7f536e6494080e"
  },
  {
    "url": "tag/index.html",
    "revision": "f25c4a7f706d566fce2d20d9aed5fd1a"
  },
  {
    "url": "tags/Bower/index.html",
    "revision": "28a7267c41f73019b5adeca74c8de0a7"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "8a32905f2fb98cfab41dfa7e88d45b37"
  },
  {
    "url": "tags/CSS3/index.html",
    "revision": "0c10fa8df503a1f7ff002f7ac703a614"
  },
  {
    "url": "tags/DOM/index.html",
    "revision": "f08129b1624b729961bd85346b2ed4aa"
  },
  {
    "url": "tags/ECMAScript 2015/index.html",
    "revision": "3b8591ee1d4ffe9e042c9d0d49c72f5b"
  },
  {
    "url": "tags/element-ui/index.html",
    "revision": "e79ddae5bbee98e783125355b1ea1184"
  },
  {
    "url": "tags/Event/index.html",
    "revision": "4681d88c089054ad8f95e850f3f87baf"
  },
  {
    "url": "tags/Excel/index.html",
    "revision": "e397aa9d14b9ffbe9881492b2f358df7"
  },
  {
    "url": "tags/flex/index.html",
    "revision": "620e63937e30ada9974b997c65cca4f5"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "2e7f78e3a8a23048103f21117f6570fd"
  },
  {
    "url": "tags/hack/index.html",
    "revision": "f1380f020b13c9423c673e5fc4d2c42a"
  },
  {
    "url": "tags/http/index.html",
    "revision": "0199aae31b08ad1e0e92d7d829296110"
  },
  {
    "url": "tags/IE兼容/index.html",
    "revision": "29ba83f2fe224ecc9bd67e2a18b81aae"
  },
  {
    "url": "tags/IE条件查询/index.html",
    "revision": "8c54798f43262292d43bce1cddc9a88b"
  },
  {
    "url": "tags/Jade/index.html",
    "revision": "df13dcd647a98b824da107964c4273e9"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "84e78e674564f0994cd981ef7e48be43"
  },
  {
    "url": "tags/jquery-ui/index.html",
    "revision": "19fd20433a092f07d6881ab3a8c98e00"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "be4f28328b4398b1c5e7028784407ebc"
  },
  {
    "url": "tags/JSON/index.html",
    "revision": "c9ed6915de7fbd04808eb9c56f72d8ab"
  },
  {
    "url": "tags/LESS/index.html",
    "revision": "c3848725c52686b8b1aece7be3191293"
  },
  {
    "url": "tags/loading/index.html",
    "revision": "c09b3ceaf36ded755eb0f69c44812872"
  },
  {
    "url": "tags/MongoDB/index.html",
    "revision": "6f412fd8ef486368e2241e448dbabf87"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "6d46bf0eaa7e5a948e24bf60730f0e36"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "4d35de6a837a686783618dcb07ff9b90"
  },
  {
    "url": "tags/Public Style/index.html",
    "revision": "5ee4695e4a0b14f9a1f48b922dbe57b1"
  },
  {
    "url": "tags/router/index.html",
    "revision": "3360721857a4499e21384c79a6bb7069"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "37efe62804467014aa5d5b8af85b5c75"
  },
  {
    "url": "tags/Vue-cli/index.html",
    "revision": "815d29fa5a754a69c9b194c5da58a0b0"
  },
  {
    "url": "tags/Vuex/index.html",
    "revision": "c28e02b0fd8ce8095ccf8965e894383b"
  },
  {
    "url": "tags/动画/index.html",
    "revision": "4fdb33d2d15108891792a2ee08ef5f73"
  },
  {
    "url": "tags/原生JS/index.html",
    "revision": "d49e483fd2ebda5c8c6e7bfe388297be"
  },
  {
    "url": "tags/栅格/index.html",
    "revision": "5ec4e1a7f4c7d8713d300c6782f0e8f7"
  },
  {
    "url": "tags/模板引擎/index.html",
    "revision": "25563e5e83f148a08defa81bc16c8198"
  },
  {
    "url": "timeline/index.html",
    "revision": "376613cc632065df426cf79d388dd6cc"
  },
  {
    "url": "views/database/MongoDB学习笔记.html",
    "revision": "c88b850d4947d9fa47de6d9fb15cf5ac"
  },
  {
    "url": "views/html.css/CSS flex 弹性盒模型.html",
    "revision": "c43f938155b5c76de8681bfb782cbffe"
  },
  {
    "url": "views/html.css/CSS Hack.html",
    "revision": "e516a1a197a3f911ec0c577c49ca71c6"
  },
  {
    "url": "views/html.css/CSS-Public-Style.html",
    "revision": "c15d26a262400e522947675977754399"
  },
  {
    "url": "views/html.css/HTML 页面加载过程.html",
    "revision": "8764cece49b9ccf963990491235736eb"
  },
  {
    "url": "views/html.css/IE兼容问题总结.html",
    "revision": "cb16f4c1eca733f6a798f2c433246d5d"
  },
  {
    "url": "views/html.css/Jade 模板引擎.html",
    "revision": "939c5a7772a92562efe29c49ca86b498"
  },
  {
    "url": "views/html.css/移动端-CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "5ed802c138be44b8e6ff25c2acf13a6c"
  },
  {
    "url": "views/html.css/移动端-常见问题及解决方案.html",
    "revision": "edf9b7840ea7aef89a444b3ca7ca55a8"
  },
  {
    "url": "views/html.css/移动端-适配方案.html",
    "revision": "be29752c247fd698f3f9811d266c3b94"
  },
  {
    "url": "views/javascript/ES6 学习笔记.html",
    "revision": "df9dadfb94d0c3c2fe5b062eac65daa2"
  },
  {
    "url": "views/javascript/ES6-新增数组操作方法.html",
    "revision": "f30caa50d8ff7e90d94153b2caf7e8b3"
  },
  {
    "url": "views/javascript/JavaScript-DOM事件.html",
    "revision": "209b3a0a0a1db5a861f494989ba47fa8"
  },
  {
    "url": "views/javascript/JavaScript-内置属性与方法.html",
    "revision": "ada667e136fdf2a815c61124ddf49fc9"
  },
  {
    "url": "views/javascript/JavaScript-字符串.html",
    "revision": "18af926135cb5ed467e2dee28de84027"
  },
  {
    "url": "views/javascript/JavaScript-对象属性操作.html",
    "revision": "abea7ca3dc8de74d0127399b91226acb"
  },
  {
    "url": "views/javascript/JavaScript-常用方法封装.html",
    "revision": "57dd9a85c22492c31dab1f99ccf51cc4"
  },
  {
    "url": "views/javascript/JavaScript-性能优化.html",
    "revision": "1f38093b39c61fd802ac52c1ae0d2434"
  },
  {
    "url": "views/javascript/JavaScript-操作JSON.html",
    "revision": "f1ecd2b6b773778d784b3c6e7e0a162c"
  },
  {
    "url": "views/javascript/JavaScript-数组.html",
    "revision": "07cd5d4bb3e6e6d0fd6bfe8a112d402e"
  },
  {
    "url": "views/javascript/JavaScript-类型检查.html",
    "revision": "eba292fb3f2bc0a0fd69fbf826bf2552"
  },
  {
    "url": "views/javascript/JavaScript-节点操作.html",
    "revision": "d9fe144534eb6c43ebedc3d9ded5efe2"
  },
  {
    "url": "views/javascript/JavaScript-预编译-预解析.html",
    "revision": "7f76e8f73ab0db5448829b67c9f99bc4"
  },
  {
    "url": "views/javascript/异步加载JS.html",
    "revision": "00df12752e15d14a7a29a42b04696735"
  },
  {
    "url": "views/plugin/Axios.html",
    "revision": "ca26f15849f5f3cd93d46152062f4d9d"
  },
  {
    "url": "views/plugin/Handsontable-在线Excel表格.html",
    "revision": "f65591c309e3a7533d3dd37686cbfcea"
  },
  {
    "url": "views/plugin/jQuery-对应JavaScript书写.html",
    "revision": "a62eefb5332febb8ab1566810265d667"
  },
  {
    "url": "views/plugin/jQuery-常用方法.html",
    "revision": "3250b25af96bfc3c3a35fafffb16e71f"
  },
  {
    "url": "views/plugin/jQuery-插件开发基础.html",
    "revision": "a0e194608590661ac8d3db01af8389fb"
  },
  {
    "url": "views/plugin/Plugin-JS-粒子动画.html",
    "revision": "74e7663928bd7ed9fb337f50693bb9c2"
  },
  {
    "url": "views/sass.less/LESS-Grid-实现栅格布局.html",
    "revision": "57bd505b8b3895d4127409c159434072"
  },
  {
    "url": "views/sass.less/LESS-函数方法.html",
    "revision": "2e55d5c687e7b7d720be3fcd61bf2a0b"
  },
  {
    "url": "views/sass.less/LESS-学习总结.html",
    "revision": "b06dea8b6aa36169ec0e437b3abf1838"
  },
  {
    "url": "views/server/Java-JDBC.html",
    "revision": "33da95b8fd41e8869eab7126ca64e80f"
  },
  {
    "url": "views/server/Node-js-npm-nrm-nvm.html",
    "revision": "0bded4e2e8d5f331117462f482771302"
  },
  {
    "url": "views/server/Node-js-事件驱动模型.html",
    "revision": "68d1d72ae1b505dc06c09036a82f1866"
  },
  {
    "url": "views/server/Node-js-模块系统.html",
    "revision": "fef3f1d3981b33b37f715b5a0ec6064d"
  },
  {
    "url": "views/tools/Bower-包管理工具.html",
    "revision": "6683e8cbabe0f42b0c0ff3896ea9170c"
  },
  {
    "url": "views/tools/Gulp-构建工具.html",
    "revision": "9980a2765df13d0f98da573472535c7f"
  },
  {
    "url": "views/tools/Tool-Sunny-Ngrok-内网穿透.html",
    "revision": "6c6d22cad82bcaf79dd678d83e69f6dc"
  },
  {
    "url": "views/typescript/TypeScript-入门.html",
    "revision": "425969d08c1e1e6c062970beb4d76a41"
  },
  {
    "url": "views/ui/Element-UI-分页组件封装.html",
    "revision": "970e5b0575d65723885b0f22a9d43724"
  },
  {
    "url": "views/ui/Element-UI-实现树形选择器.html",
    "revision": "b5a79f3363a7f5496f74a1e9bf302338"
  },
  {
    "url": "views/ui/Element-UI-表格动态编辑.html",
    "revision": "3f00f7480b12a3936a26ef9911635499"
  },
  {
    "url": "views/ui/jQuery-UI.html",
    "revision": "1700821f1d895ab08d070b6cd034397d"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（一）构建初始项目.html",
    "revision": "5908bfac424df8465abf9113c2a44f9d"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（三）配置 TypeScript.html",
    "revision": "11cc1e40723597cd21b9462bdf2e10a1"
  },
  {
    "url": "views/vue/Vue-cli 3.0 构建项目（二）设置接口代理.html",
    "revision": "98892a7714472f15ad5c63809b4cf38c"
  },
  {
    "url": "views/vue/Vue-router 路由.html",
    "revision": "8be33c40b537ad1736d36875753bfb32"
  },
  {
    "url": "views/vue/Vue-Vuex 状态管理.html",
    "revision": "08b704b81a2f8af10ae668f51036b08e"
  },
  {
    "url": "views/vue/Vue-事件修饰符.html",
    "revision": "d0ffe41a4d12b2b1ceb5c0c4a06da096"
  },
  {
    "url": "views/vue/Vue-常见问题解决方案.html",
    "revision": "6cc58406adc4959dd48d8185c8b6f559"
  },
  {
    "url": "views/vue/Vue-指令.html",
    "revision": "bcb4e4a0f0badd32cba7b786198165a1"
  },
  {
    "url": "views/vue/Vue-生命周期钩子.html",
    "revision": "2f74b9d005aa22d41246d92cf98ad1ae"
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
