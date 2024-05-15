(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{437:function(t,a,s){"use strict";s.r(a);var n=s(4),v=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-1-materialapp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-materialapp"}},[t._v("#")]),t._v(" 1.1 MaterialApp")]),t._v(" "),a("p",[t._v("从Flutter的入门学习中，我们知道Flutter本身是一个Widget树，MaterialApp这个Widget是可以理解为是Widget树的根组件；")]),t._v(" "),a("p",[t._v("MaterialApp的作用是用于定义Widget树的一些全局配置信息，比如：应用程序标题、全局样式、全局字体，路由以及默认显示的主页组件")]),t._v(" "),a("h3",{attrs:{id:"属性概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性概述"}},[t._v("#")]),t._v(" 属性概述")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("应用程序的标题，通常显示在设备任务管理器中")])]),t._v(" "),a("tr",[a("td",[t._v("theme")]),t._v(" "),a("td",[t._v("ThemeData")]),t._v(" "),a("td",[t._v("应用程序的主题配置")])]),t._v(" "),a("tr",[a("td",[t._v("darkTheme")]),t._v(" "),a("td",[t._v("ThemeData")]),t._v(" "),a("td",[t._v("应用程序的暗黑模式主题样式")])]),t._v(" "),a("tr",[a("td",[t._v("themeMode")]),t._v(" "),a("td",[t._v("ThemeMode")]),t._v(" "),a("td",[t._v("定义应用程序的主题模式")])]),t._v(" "),a("tr",[a("td",[t._v("initialRoute")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("初始路由名称，即应用程序启动时显示的页面")])]),t._v(" "),a("tr",[a("td",[t._v("routes")]),t._v(" "),a("td",[a("code",[t._v("Map<String, WidgetBuilder>")])]),t._v(" "),a("td",[t._v("静态路由表，将路由名称与对应的Widget关联起来")])]),t._v(" "),a("tr",[a("td",[t._v("onGenerateRoute")]),t._v(" "),a("td",[t._v("RouteFactory")]),t._v(" "),a("td",[t._v("自定义路由生成器，用于处理未在路由表中定义的路由")])]),t._v(" "),a("tr",[a("td",[t._v("onUnknownRoute")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("未知路由组件映射,"),a("em",[t._v("404页面")])])]),t._v(" "),a("tr",[a("td",[t._v("localizationsDelegates")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("本地化配置，用于支持多语言")])]),t._v(" "),a("tr",[a("td",[t._v("supportedLocales")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("支持的语言列表")])]),t._v(" "),a("tr",[a("td",[t._v("home")]),t._v(" "),a("td",[t._v("Widget")]),t._v(" "),a("td",[t._v("应用程序的初始页面")])])])]),t._v(" "),a("h3",{attrs:{id:"属性说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性说明"}},[t._v("#")]),t._v(" 属性说明")]),t._v(" "),a("h4",{attrs:{id:"home"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#home"}},[t._v("#")]),t._v(" home")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("home")]),t._v(" 属性指定应用程序的主屏幕，是一个 "),a("code",[t._v("Widget")]),t._v(" 对象，通常是一个页面的根组件。当应用程序启动时，会自动显示在屏幕上")])]),t._v(" "),a("h4",{attrs:{id:"title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("title")]),t._v(" 属性指定应用程序的标题，会在应用程序的顶部和任务管理器的标签上显示")])]),t._v(" "),a("h4",{attrs:{id:"theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme"}},[t._v("#")]),t._v(" theme")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThemeData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置整体亮度模式为明亮")]),t._v("\n brightness"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Brightness")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("light"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置应用程序的主要颜色")]),t._v("\n primaryColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Colors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置主要颜色的亮度模式为暗色")]),t._v("\n primaryColorBrightness"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Brightness")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置主要颜色的浅色版本")]),t._v("\n primaryColorLight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Colors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lightBlue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置主要颜色的暗色版本")]),t._v("\n primaryColorDark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Colors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("darkBlue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置强调颜色")]),t._v("\n accentColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Colors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置强调颜色的亮度模式为暗色")]),t._v("\n accentColorBrightness"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Brightness")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置脚手架的背景颜色")]),t._v("\n scaffoldBackgroundColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Colors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义按钮样式")]),t._v("\n buttonTheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ButtonThemeData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置按钮的颜色")]),t._v("\n     buttonColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Colors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置按钮的形状")]),t._v("\n     shape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RoundedRectangleBorder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n         borderRadius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BorderRadius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("circular")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"_1-2-scaffold"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-scaffold"}},[t._v("#")]),t._v(" 1.2 Scaffold")]),t._v(" "),a("p",[t._v("Scaffold相当于界面的主体，可以理解为HTML的DOM树中的body标签，用于定义应用需要展示的内容；")]),t._v(" "),a("p",[t._v("Scaffold组件定义了基本的页面脚手架：appBar（顶部的标题栏）、body（页面主体）、drawer（左侧滑动组件）、endDrawer（右侧滑动组件）等等基本的主页结构")]),t._v(" "),a("h3",{attrs:{id:"组件概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件概述"}},[t._v("#")]),t._v(" 组件概述")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("appBar")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("顶部的标题栏")])]),t._v(" "),a("tr",[a("td",[t._v("body")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("显示整体布局")])]),t._v(" "),a("tr",[a("td",[t._v("floatingActionButton")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("浮动按钮，默认右下角")])]),t._v(" "),a("tr",[a("td",[t._v("floatingActionButtonLocation")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("按钮的位置")])]),t._v(" "),a("tr",[a("td",[t._v("floatingActionButtonAnimator")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("按钮动画")])]),t._v(" "),a("tr",[a("td",[t._v("drawer")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("左侧滑动组件")])]),t._v(" "),a("tr",[a("td",[t._v("onDrawerChanged")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("左侧滑动组件事件监听")])]),t._v(" "),a("tr",[a("td",[t._v("endDrawer")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("右侧滑动组件")])]),t._v(" "),a("tr",[a("td",[t._v("onEndDrawerChanged")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("右侧滑动组件事件监听")])]),t._v(" "),a("tr",[a("td",[t._v("bottomNavigationBar")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("底部菜单组件")])]),t._v(" "),a("tr",[a("td",[t._v("backgroundColor")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("背景色")])]),t._v(" "),a("tr",[a("td",[t._v("persistentFooterButtons")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("显示在基架底部的一组按钮")])]),t._v(" "),a("tr",[a("td",[t._v("resizeToAvoidBottomInset")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("显示屏幕键盘")])])])]),t._v(" "),a("h2",{attrs:{id:"_1-3-appbar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-appbar"}},[t._v("#")]),t._v(" 1.3 AppBar")]),t._v(" "),a("p",[t._v("在应用程序中经常会在首页顶部定义的toolbar，在toolbar中添加Logo、搜索框、或者用户头像等信息，是一个经常会用到的组件，因此Flutter提供了AppBar专为应用栏定制了通用结构与组件内容：主要包括三部分leading、title、actions，leading放置在AppBar的最左边位置；title在中间自适应宽度，actions在右边。")]),t._v(" "),a("img",{attrs:{src:"https://s21.ax1x.com/2024/05/11/pkZXCvV.png",alt:"pkZXCvV.png",border:"0"}}),t._v(" "),a("h3",{attrs:{id:"属性概述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性概述-2"}},[t._v("#")]),t._v(" 属性概述")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("toolbarOpacity")]),t._v(" "),a("td",[t._v("double")]),t._v(" "),a("td",[t._v("工具栏透明度:leading+title+action")])]),t._v(" "),a("tr",[a("td",[t._v("toolbarHeight")]),t._v(" "),a("td",[t._v("double")]),t._v(" "),a("td",[t._v("工具栏高度")])]),t._v(" "),a("tr",[a("td",[t._v("leading")]),t._v(" "),a("td",[t._v("Widget")]),t._v(" "),a("td",[t._v("定义在Title前面的组件")])]),t._v(" "),a("tr",[a("td",[t._v("leadingWidth")]),t._v(" "),a("td",[t._v("double")]),t._v(" "),a("td",[t._v("leading组件的宽度")])]),t._v(" "),a("tr",[a("td",[t._v("iconTheme")]),t._v(" "),a("td",[t._v("IconThemeData")]),t._v(" "),a("td",[t._v("leading组件图标样式")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("Widget")]),t._v(" "),a("td",[t._v("toolbar中定义的标题组件")])]),t._v(" "),a("tr",[a("td",[t._v("titleTextStyle")]),t._v(" "),a("td",[t._v("TextStyle")]),t._v(" "),a("td",[t._v("标题组件的文字样式")])]),t._v(" "),a("tr",[a("td",[t._v("titleSpacing")]),t._v(" "),a("td",[t._v("double")]),t._v(" "),a("td",[t._v("标题组件和左右组件的距离")])]),t._v(" "),a("tr",[a("td",[t._v("centerTitle")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("标题是否居中，默认false")])]),t._v(" "),a("tr",[a("td",[t._v("actions")]),t._v(" "),a("td",[a("code",[t._v("List<Widget>")])]),t._v(" "),a("td",[t._v("右侧组件列表")])]),t._v(" "),a("tr",[a("td",[t._v("actionsIconTheme")]),t._v(" "),a("td",[t._v("IconThemeData")]),t._v(" "),a("td",[t._v("右侧组件样式")])]),t._v(" "),a("tr",[a("td",[t._v("flexibleSpace")]),t._v(" "),a("td",[t._v("FlexibleSpaceBar")]),t._v(" "),a("td",[t._v("堆叠方式展示TabBar后的组件")])]),t._v(" "),a("tr",[a("td",[t._v("bottom")]),t._v(" "),a("td",[t._v("PreferredSizeWidget")]),t._v(" "),a("td",[t._v("即tabBar：在AppBar的底部")])]),t._v(" "),a("tr",[a("td",[t._v("bottomOpacity")]),t._v(" "),a("td",[t._v("double")]),t._v(" "),a("td",[t._v("即tabBar的透明度")])]),t._v(" "),a("tr",[a("td",[t._v("shape")]),t._v(" "),a("td",[t._v("ShapeBorder")]),t._v(" "),a("td",[t._v("AppBar边框属性")])]),t._v(" "),a("tr",[a("td",[t._v("surfaceTintColor")]),t._v(" "),a("td",[t._v("Color")]),t._v(" "),a("td",[t._v("AppBar表面颜色")])]),t._v(" "),a("tr",[a("td",[t._v("backgroundColor")]),t._v(" "),a("td",[t._v("Color")]),t._v(" "),a("td",[t._v("AppBar背景色")])]),t._v(" "),a("tr",[a("td",[t._v("foregroundColor")]),t._v(" "),a("td",[t._v("Color")]),t._v(" "),a("td",[t._v("AppBar前景色")])]),t._v(" "),a("tr",[a("td",[t._v("elevation")]),t._v(" "),a("td",[t._v("double")]),t._v(" "),a("td",[t._v("AppBar的底部阴影高度")])]),t._v(" "),a("tr",[a("td",[t._v("shadowColor")]),t._v(" "),a("td",[t._v("Color")]),t._v(" "),a("td",[t._v("AppBar的底部阴影颜色")])]),t._v(" "),a("tr",[a("td",[t._v("scrolledUnderElevation")]),t._v(" "),a("td",[t._v("double")]),t._v(" "),a("td",[t._v("发生滚动后底部阴影的高度")])])])]),t._v(" "),a("h3",{attrs:{id:"属性说明-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性说明-2"}},[t._v("#")]),t._v(" 属性说明")]),t._v(" "),a("h4",{attrs:{id:"leading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leading"}},[t._v("#")]),t._v(" leading")]),t._v(" "),a("blockquote",[a("p",[t._v("接受一个小部件，可以分配任何东西：文本、图标，甚至一行中的多个小部件")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("当Drawer添加到Scaffold时 ，会分配一个menu图标leading来打开抽屉")])]),t._v(" "),a("li",[a("p",[t._v("当自定义leading后，如果要打开Drawer可以使用Drawer的API")]),t._v(" "),a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用Builder构建一个IconButton,使用Scaffold.of(context).openDrawer()打开Drawer")]),t._v("\nleading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IconButton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        onPressed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Scaffold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("openDrawer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Icon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Icons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("safety_check_outlined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])])])]),t._v(" "),a("h4",{attrs:{id:"leadingwidth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leadingwidth"}},[t._v("#")]),t._v(" leadingWidth")]),t._v(" "),a("blockquote",[a("p",[t._v("控制"),a("code",[t._v("leading")]),t._v("可以占用多少宽度")])]),t._v(" "),a("h2",{attrs:{id:"_1-4-drawer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-drawer"}},[t._v("#")]),t._v(" 1.4 Drawer")]),t._v(" "),a("p",[t._v("抽屉组件，定义在Scaffold组件上的抽屉分为左侧Drawer（drawer）和右侧Drawer（endDrawer）")]),t._v(" "),a("h3",{attrs:{id:"属性概述-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性概述-3"}},[t._v("#")]),t._v(" 属性概述")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("backgroundColor")]),t._v(" "),a("td",[t._v("Color")]),t._v(" "),a("td",[t._v("背景色")])]),t._v(" "),a("tr",[a("td",[t._v("elevation")]),t._v(" "),a("td",[t._v("double")]),t._v(" "),a("td",[t._v("阴影高度")])]),t._v(" "),a("tr",[a("td",[t._v("shadowColor")]),t._v(" "),a("td",[t._v("Color")]),t._v(" "),a("td",[t._v("阴影颜色")])]),t._v(" "),a("tr",[a("td",[t._v("surfaceTintColor")]),t._v(" "),a("td",[t._v("Color")]),t._v(" "),a("td",[t._v("抽屉表面颜色")])]),t._v(" "),a("tr",[a("td",[t._v("shape")]),t._v(" "),a("td",[t._v("ShapeBorder")]),t._v(" "),a("td",[t._v("抽屉边框属性")])]),t._v(" "),a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",[t._v("double")]),t._v(" "),a("td",[t._v("抽屉宽度")])]),t._v(" "),a("tr",[a("td",[t._v("child")]),t._v(" "),a("td",[t._v("Widget")]),t._v(" "),a("td",[t._v("抽屉子组件")])]),t._v(" "),a("tr",[a("td",[t._v("semanticLabel")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("clipBehavior")]),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),a("p",[t._v("回调:")]),t._v(" "),a("ol",[a("li",[t._v("ValueChange：void Function(T value)")]),t._v(" "),a("li",[t._v("VoidCallback：")]),t._v(" "),a("li",[t._v("ChangeNotifier：extend with，为了可以修改在监听器内修改状态")]),t._v(" "),a("li",[t._v("PopNavigationRouterDilegateMixin：")]),t._v(" "),a("li",[t._v("TextInputType：输入框输入类型")]),t._v(" "),a("li",[t._v("FocuseNode：获取焦点监听对象，页面销毁时候释放对象")]),t._v(" "),a("li",[t._v("InkWell：")]),t._v(" "),a("li",[t._v("FractionallySizeBoxy：填满屏幕的组件")])])])}),[],!1,null,null,null);a.default=v.exports}}]);