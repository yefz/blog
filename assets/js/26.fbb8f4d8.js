(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{193:function(v,_,l){"use strict";l.r(_);var e=l(2),o=Object(e.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"window-onload-和-domcontentloaded-的区别"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#window-onload-和-domcontentloaded-的区别"}},[v._v("#")]),v._v(" window.onload 和 DOMContentLoaded 的区别")]),v._v(" "),l("ul",[l("li",[l("code",[v._v("DOMContentLoaded")]),v._v("：DOM结构加载完毕")]),v._v(" "),l("li",[l("code",[v._v("window.onload")]),v._v("：DOM结构和静态资源加载完毕")])]),v._v(" "),l("h1",{attrs:{id:"从输入-url-到得到-html-的过程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#从输入-url-到得到-html-的过程"}},[v._v("#")]),v._v(" 从输入 url 到得到 html 的过程")]),v._v(" "),l("ol",[l("li",[v._v("输入资源地址（地址栏输入、页面跳转、页面加载）发起请求")]),v._v(" "),l("li",[v._v("浏览器缓存机制，优先查找本地有无缓存可用\n"),l("ul",[l("li",[v._v("搜索自身的 DNS 缓存")]),v._v(" "),l("li",[v._v("搜索操作系统自身的DNS 缓存")]),v._v(" "),l("li",[v._v("读取本地的 HOST 文件")]),v._v(" "),l("li",[v._v("发起一个 DNS 的系统调用")])])]),v._v(" "),l("li",[v._v("浏览器向 DNS 服务器发起 "),l("code",[v._v("域名")]),v._v(" 解析 请求\n"),l("ul",[l("li",[v._v("宽带运营服务商服务器查看本身缓存")]),v._v(" "),l("li",[v._v("运营商服务器发起一个迭代DNS解析的请求")]),v._v(" "),l("li",[v._v("运营商服务器把结果返回操作系统内核同时缓存起来")]),v._v(" "),l("li",[v._v("操作系统内核把结果返回浏览器")]),v._v(" "),l("li",[v._v("浏览器拿到 "),l("code",[v._v("域名")]),v._v(" 对应的 "),l("code",[v._v("IP")]),v._v(" 地址")])])]),v._v(" "),l("li",[v._v("建立与服务器的 TCP/IP 连接，"),l("code",[v._v("三次握手")]),v._v(" 过程")]),v._v(" "),l("li",[v._v("向服务器发送 "),l("code",[v._v("http")]),v._v(" / "),l("code",[v._v("https")]),v._v(" 请求，创建端口")]),v._v(" "),l("li",[v._v("服务器在端口监听客户端请求\n"),l("ul",[l("li",[v._v("接收请求，根据路径参数，经过后端处理后")]),v._v(" "),l("li",[v._v("返回状态和内容")])])]),v._v(" "),l("li",[v._v("浏览器得到返回内容\n"),l("ul",[l("li",[v._v("拿到HTML页面代码，开始解析页面")]),v._v(" "),l("li",[v._v("碰到的 js、css、图片等静态资源，发起请求")]),v._v(" "),l("li",[v._v("从发起请求到返回结果，同样经过上面的步骤")]),v._v(" "),l("li",[v._v("根据拿到的资源对页面进行渲染，最终把一个完整的页面呈现给用户")])])])]),v._v(" "),l("h1",{attrs:{id:"浏览器渲染页面的过程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染页面的过程"}},[v._v("#")]),v._v(" 浏览器渲染页面的过程")]),v._v(" "),l("ul",[l("li",[v._v("根据 "),l("code",[v._v("HTML")]),v._v(" 结构生成 "),l("code",[v._v("DOM Tree")])]),v._v(" "),l("li",[v._v("根据 "),l("code",[v._v("CSS")]),v._v(" 生成 "),l("code",[v._v("CSSOM")])]),v._v(" "),l("li",[v._v("将 "),l("code",[v._v("DOM")]),v._v(" 和 "),l("code",[v._v("CSSOM")]),v._v(" 整合形成 "),l("code",[v._v("RenderTree")])]),v._v(" "),l("li",[v._v("根据 "),l("code",[v._v("RenderTree")]),v._v(" 开始渲染和展示")]),v._v(" "),l("li",[v._v("遇到 "),l("code",[v._v("<script>")]),v._v(" 时，会执行并阻塞渲染，因为 Javascript 代码有权利改变"),l("code",[v._v("DOM")]),v._v("树")])])])}),[],!1,null,null,null);_.default=o.exports}}]);