# {{ name }}

> {{ description }}

## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```
For a detailed explanation on how things work, check out the [guide](http://macula.top/cenarius-vux) and [docs for vue-loader](http://vuejs.github.io/vue-loader) and [docs for vux](http://vux.li).


## 项目说明
### 项目结构
```
build/                // 构建服务和webpack配置
config/               // 项目不同环境的配置
dist/                 // 项目build生成的目录
src/                  // 项目源码
--| assets/           // 所有页面共享的图片、js、css等静态资源
--| components/       // 所有页面共享的vue组件
--| modules/          // 各个模块源码存放处
----| index/          // 应用的入口模块，一般情况下必须要有这个目录
------| App.vue       // 主页面
------| index.html    // webpack预编译html入口，文件名与模块名一致
------| index.js      // webpack预编译入口，文件名与模块名一致
------| ......        // 其他与demo目录一致  

----| demo/           //  demo模块对应源码
------| assets/       //  存放demo模块的图片、js、css等静态资源
------| components/   //  demo模块的私有组件  
------| layouts/      //  demo模块的布局页，App.vue不再起作用
------| pages/        //  demo模块的页面，路由指向这里，不可在其他页面当组件使用
------| router/         
--------| index.js    //  demo模块的页面路由
------| service/      //  demo模块调用远程接口或者模拟数据的API
------| store/
--------| index.js    //  demo模块的vuex定义
--------| ......
------| App.vue       // 主页面
------| demo.html     // webpack预编译html入口，文件名与模块名一致
------| demo.js       // webpack预编译入口，文件名与模块名一致

static/               // 直接被拷贝到build的文件
test/                 // 测试脚本
```

### 自动路由
参考nuxtjs，提供编译时分析pages目录中的vue文件自动生成路由功能，具体请参考
https://zh.nuxtjs.org/guide/routing

所以你只需要往pages目录中添加相应的vue页面即可，路由会按照规则自动产生，建议pages中按照功能再划分目录

### 多布局管理
一个项目可能存在多个布局，比如登录页和主页面的布局就不一样，为了解决SPA应用的多布局问题，建议采用layouts目录写入多个布局，注意布局组件需要命名，并且在你的视图组件中

通过如下片段设置路由的布局等信息

```
<routeMeta>
  {
    title: '首页',
    showBack: false,
    showMore: false,
    layout: 'layout-home'
  }
</routeMeta>
```
布局名称需要和layouts目录中组件的name一致

### vuex状态管理
vuex请参考 https://vuex.vuejs.org/zh-cn/structure.html

### API接口或数据

TODO：介绍怎样调用后台接口，或者模拟数据

### Mock API
建议采用 http://mockjs.com 

Mockjs会直接拦截你的AJAX请求，避免需要改动你的代码来切换mock数据或者后台接口数据，示例可以参考：https://segmentfault.com/a/1190000010592626

### Vux组件使用
项目默认已经集成了vux组件库，可以直接引用，具体请参考 https://vux.li

### 环境参数
正常开发时，有时需要不同的环境有不同的配置参数，比如后端URL地址等信息，你可以打开config目录，默认分为dev、test、staging、prod四套环境，可以仿照profile的定义，注意由于这里的参数会照样替换到你的程序中，所以是有两个引号的。使用这些参数的方式是 process.env.xxx。

编译时，不同环境选择不同的编译命令：
```
#开发环境编译，不是本地调试那种
npm run build-dev

#测试环境编译
npm run build-test

#准生产环境编译
npm run build-staging

#生产环境编译
npm run build
```
