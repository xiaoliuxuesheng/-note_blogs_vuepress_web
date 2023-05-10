# 第一部分 config.ts

## 1. 网页title和搜索关键字

```json
locales: {
    '/': {
        lang: 'zh-CN',
        title: "xiaoliuxuesheng",
        description: '',
    }
}
```

## 2. 网站部署路径配置base说明：

## 3. 导航栏配置说明：themeConfig.nav

- 导航栏选项：一级目录的目录名称是text属性，目录的配置项是link指向的md文件

  ```json
  { 
      text: '首页', 
      link: '/office/' 
  }
  ```

  > 一级目录link配置：link匹配到文件中的permalink属性，从而找到pageComponent.data.path对应的目录名称，在该目录下的文件夹会识别为二级目录，必须使用排序编号定义文件夹名称；
  >
  > ```markdown
  > ---
  > pageComponent:
  >   name: Catalogue
  >   data:
  >     path: 01.办公软件
  >     imgUrl: /img/web.png
  >     description: Word、Excel、PPT、Vision办公技术
  > title: 前端
  > date: 2020-03-11 21:50:53
  > permalink: /office/
  > sidebar: false
  > article: false
  > comment: false
  > editLink: false
  > author:
  >   name: xugaoyi
  >   link: https://github.com/xugaoyi
  > ---
  > ```

- 导航栏选项：二级目录如果没有子菜单，二级目录就行笔记文件，如下配置：一级目录是页面，二级菜单就是随便指向对应配置目录中的一个md文件即可

  ```json
  {
      text: '页面',
      link: '/ui/',
      items: [
          { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
          { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
      ],
  }
  ```

  > - link属性对应的md配置
  >
  >   ```markdown
  >   ---
  >   pageComponent:
  >     name: Catalogue
  >     data:
  >       path: 02.页面
  >       imgUrl: /img/ui.png
  >       description: html(5)/css(3)，前端页面相关技术
  >   title: 页面
  >   date: 2020-03-11 21:50:54
  >   permalink: /ui/
  >   sidebar: false
  >   article: false
  >   comment: false
  >   editLink: false
  >   author:
  >     name: xugaoyi
  >     link: https://github.com/xugaoyi
  >   ---
  >   ```
  >
  > - `02.页面`的目录结构
  >
  >   ```tex
  >   /02.页面
  >   	/10.HTML
  >   	/20.CSS
  >   ```
  >
  > - 文件头设置：新建md文件会自动生成文件头
  >
  >   ```markdown
  >   ---
  >   title: 常用meta整理
  >   date: 2020-02-21 12:20:10
  >   permalink: /pages/8309a5b876fc95e3
  >   categories:
  >     - 页面
  >     - HTML
  >   tags:
  >     - null
  >   author:
  >     name: xugaoyi
  >     link: https://github.com/xugaoyi
  >   ---
  >   ```

- 导航栏选项：二级目录如果有子菜单，二级目录就不可以点击，因为二级目录是个文件夹；二级目录链接到一个md文件

  ```json
  {
      text: '前端',
      link: '/web/',
      items: [
          {
              text: '前端文章',
              items: [
                  { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
              ]
          }
      ]
  }
  ```

  > - 一级目录前端的link属性对应的md配置
  >
  >   ```markdown
  >   ---
  >   pageComponent:
  >     name: Catalogue
  >     data:
  >       path: 01.前端
  >       imgUrl: /img/web.png
  >       description: JavaScript、ES6、Vue框架等前端技术
  >   title: 前端
  >   date: 2020-03-11 21:50:53
  >   permalink: /web/
  >   sidebar: false
  >   article: false
  >   comment: false
  >   editLink: false
  >   author:
  >     name: xugaoyi
  >     link: https://github.com/xugaoyi
  >   ---
  >   ```
  >
  > - `01.前端`的目录结构：`前端文章.text`指向`25.JavaScript文章`目录中的一个文件，侧边栏会根据目录结构生成三级目录，并且每个文件都有自己的标题
  >
  >   ```tex
  >   /01.前端
  >   	/25.JavaScript文章
  >   		1110.三级目录
  >   	/40.学习笔记
  >   ```

- 导航栏选项：二级目录如果有子菜单，二级目录就不可以点击，因为二级目录是个文件夹；二级目录链接到一个目录结构

  ```json
  {
      text: '前端',
      link: '/web/',
      items: [
          {
              text: '学习笔记',
              items: [
                  { text: '《JavaScript教程》', link: '/note/javascript/' }
              ],
          },
      ],
  }
  ```

  > - 二级目录学习笔记的link对应的md配置=`/note/javascript/`
  >
  >   ```markdown
  >   ---
  >   pageComponent:
  >     name: Catalogue
  >     data:
  >       path: 《Vue》笔记
  >       imgUrl: https://cdn.staticaly.com/gh/xugaoyi/image_store/blog/20200112120340.png
  >       description: 本章内容为博主在原教程基础上添加学习笔记，教程版权归原作者所有。来源：<a href='https://wangdoc.com/javascript/' target='_blank'>JavaScript教程</a>
  >   title: 《JavaScript教程》笔记
  >   date: 2020-01-12 11:51:53
  >   permalink: /note/javascript/
  >   article: false
  >   comment: false
  >   editLink: false
  >   author:
  >     name: xugaoyi
  >     link: https://github.com/xugaoyi
  >   ---
  >   ```
  >
  > - `/note/javascript/`会关联到根目录中`《Vue》笔记`目录，在`《Vue》笔记`目录下会根据子文件夹变化和文件夹中的文件标号生成标题
  >
  >   ```tex
  >   /《Vue》笔记
  >   	/01.基础
  >   		/00.MVVM模式.md
  >   		/10.生命周期.md
  >   	/02.组件
  >   		/36.使用组件的细节点.md
  >   		/40.父组件给子组件传值.md
  >   ```

## 4. 主体配置

- 侧边栏显示深度：sidebarDepth默认1，最大2（显示到h3标题）

- 导航栏logo：从获取public/img目录下的图片文件

- 导航栏右侧生成Github链接：

- 搜索结果显示最大数：searchMaxSuggestions

- 文章默认的作者信息

  ```json
  author: {
      name: 'xiaoliuxuesheng', // 必需
      link: 'https://gitee.com/xiaoliuxuesheng', // 可选的
  },
  ```

- 博主信息

  ```json
  blogger: {
      avatar: 'https://fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg',
      name: '小刘学生',
      slogan: '土木工程毕业的程序员',
  }
  ```

- 社交图标：显示于博主信息栏和页脚栏，内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social，或者使用在线图标`iconfontCssFile: '//at.alicdn.com/t/xxx.css',` // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/

  ```json
  social: {
      icons: [
          {
              iconClass: 'icon-youjian',
              title: '发邮件',
              link: 'mailto:894072666@qq.com',
          },
          {
              iconClass: 'icon-github',
              title: 'GitHub',
              link: 'https://github.com/xugaoyi',
          }
      ]
  }
  ```
  
- 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）

  ```json
  extendFrontmatter: {
      author: {
          name: 'xiaoliuxuesheng',
          link: 'https://gitee.com/xiaoliuxuesheng'
      }
  }
  ```

# 第二部分 结构设置

- 办公软件
  - World
  - Excel
  - PowerPoint
  - Vision
  - XMind
- 编程基础
  - 计算机组成
  - 计算机网络
  - 计算机系统
- JAVA
  - Java基础
    - 01.Git
    - 02.面向对象
    - 03.Java集合框架
    - 04.JavaIO
    - 05.Java网络编程
    - 06.Java并发编程
    - 07.Java反射与泛型
    - 08.编程软件技巧
    - 09.JavaEE
  - Java高级
    - 01.设计模式
    - 02.数据结构与算法
    - 03.密码学
    - 04.JVM
    - 05.Java新特性
  - Java项目构建
    - 01.Tomcat
    - 02.Nginx
    - 03.Maven
    - 04.Gradle
    - 05.Jenkins
    - 06.Docker
    - 07.K8S
  - Java框架
    - 01.Spring
    - 02.SpringMVC
    - 03.SpringBoot
    - 04.Hibernate
    - 05.SpringJPA
    - 06.MyBatis
    - 07.MyBatisPlus
    - 08.SpringSecurity
  - Java架构
    - 01.注册中心
    - 02.配置中心
    - 03.服务调用
    - 04.任务管理
    - 05.消息队列
    - 06.服务网关
    - 07.访问控制
    - 08.链路追踪
    - 09.分布式事务
    - 10.OAuth
- 前端
  - 前端基础
    - HTML
    - CSS
    - JavaScript
  - 前端进阶
    - JQuery
    - ES6新特性
    - Node
    - Typescript
    - Dart
    - Less
    - Axios
  - 前端框架
    - React
    - Vue
    - Flutter
    - Electron
    - ElementUI
  - 前端架构
- 数据库
- 嵌入式
- 产品经理
- 金融管理