(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{379:function(t,_,v){"use strict";v.r(_);var r=v(4),d=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"_6-1-盒子属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-盒子属性"}},[t._v("#")]),t._v(" 6.1 盒子属性")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("传统盒模型：所有的文档标签都是一个矩形框，被称为元素框（element box）：主要是描述了这个文档元素在浏览器中所占的位置大小；"),v("strong",[t._v("所以每个盒子除了有自己的大小和位置外，还会影响到其他盒子的位置。")])]),t._v(" "),v("img",{attrs:{src:"https://s1.ax1x.com/2020/06/04/twUi2F.jpg",alt:"twUi2F.jpg",border:"0"}})]),t._v(" "),v("li",[v("p",[t._v("盒模型相关属性")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("盒属性")]),t._v(" "),v("th",[t._v("方位属性")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("width")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("内容宽度")])]),t._v(" "),v("tr",[v("td",[t._v("height")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("内容高度")])]),t._v(" "),v("tr",[v("td",[t._v("margin: 上 右 下 左;")]),t._v(" "),v("td",[t._v("margin-bottom"),v("br"),t._v("margin-left"),v("br"),t._v("margin-right"),v("br"),t._v("margin-top")]),t._v(" "),v("td",[t._v("元素与元素之间的距离")])]),t._v(" "),v("tr",[v("td",[t._v("padding: 上 右 下 左;")]),t._v(" "),v("td",[t._v("padding-bottom"),v("br"),t._v("padding-left"),v("br"),t._v("padding-right"),v("br"),t._v("padding-top")]),t._v(" "),v("td",[t._v("元素内容到边框的距离**")])]),t._v(" "),v("tr",[v("td",[t._v("border-redius: 上 右 下 左;")]),t._v(" "),v("td",[t._v("单位是像素（px）")]),t._v(" "),v("td",[t._v("边框圆角")])]),t._v(" "),v("tr",[v("td",[t._v("border-style: 上 右 下 左;")]),t._v(" "),v("td",[t._v("solid定义实线。"),v("br"),t._v("dashed定义虚线。在大多数浏览器中呈现为实线。"),v("br"),t._v('hidden与 "none" 相同。对于table，hidden 用于解决边框冲突。')]),t._v(" "),v("td",[t._v("边框样式")])]),t._v(" "),v("tr",[v("td",[t._v("border-color: 上 右 下 左;")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("border-width: 上 右 下 左;")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("border: 宽度 样式 颜色;")]),t._v(" "),v("td",[t._v("顶部边框：border-top")]),t._v(" "),v("td",[t._v("border-top-color"),v("br"),t._v("border-top-style"),v("br"),t._v("border-top-width")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("底部边框：border-bottom")]),t._v(" "),v("td",[t._v("border-bottom-color"),v("br"),t._v("border-bottom-style"),v("br"),t._v("border-bottom-width")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("左边框：border-left")]),t._v(" "),v("td",[t._v("border-left-color"),v("br"),t._v("border-left-style"),v("br"),t._v("border-left-width")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("右边框：border-right")]),t._v(" "),v("td",[t._v("border-right-color"),v("br"),t._v("border-right-style"),v("br"),t._v("border-right-width")])])])]),t._v(" "),v("blockquote",[v("p",[t._v("内边距：padding")]),t._v(" "),v("ul",[v("li",[t._v("内边距是指；")]),t._v(" "),v("li",[t._v("内边距首先会考虑到父元素的边界，所以会有垂直方向内边距塌陷现象；")]),t._v(" "),v("li",[t._v("内边距会修改盒子模型的大小")]),t._v(" "),v("li",[t._v("内边距会有背景属性")])]),t._v(" "),v("p",[v("strong",[t._v("外边距合并现象")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("平级盒子")]),t._v("：在默认布局的垂直方向的外边距，默认情况下外边距是不会叠加，会出现合并现象，哪个盒子的外边距大以哪个为主；尽量避免：在垂直方向只给一个盒子设置外边距；")]),t._v(" "),v("li",[v("strong",[t._v("嵌套盒子")]),t._v("：嵌套盒子在垂直方式同时设置外边距会出现外边距塌陷现象：子盒子的外边距会影响到父盒子的位置；\n"),v("ul",[v("li",[t._v("给父盒子设置边框或者内边距进行限制子元素；")]),t._v(" "),v("li",[t._v("根据BFC机制：为父盒子设置溢出隐藏（overflow:hidden）属性；")])])])])])]),t._v(" "),v("li",[v("p",[t._v("css3盒子模型：box-sizing：默认的盒子尺寸计算方式是外盒尺寸：即修改盒子模型的属性会改变盒子的大小，box-sizing用于修改容器的最终尺寸计算模式为内盒尺寸（根据width和height属性确定尺寸）")]),t._v(" "),v("ul",[v("li",[t._v("外盒尺寸：空间宽高 = 内容 + padding + border + margin")]),t._v(" "),v("li",[t._v("内盒尺寸：width/height = 内容 + padding + border")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("值")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[v("strong",[t._v("border-box")])]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("CSS3新特性，CSS3的盒子模型，pading、border不会改变盒子大小")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("content-box")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("这是 CSS2.1 指定的宽度和高度的行为。传统盒子模型")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("inherit")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("指定 box-sizing 属性的值，应该从父元素继承")])])])])])])])}),[],!1,null,null,null);_.default=d.exports}}]);