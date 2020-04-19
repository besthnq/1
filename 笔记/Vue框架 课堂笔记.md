## Git 复习

1. 本地有仓库，远程没有，怎么办？

- 一般 git 仓库都有忽略文件 .gitignore。忽略一些文件，不进行 git 的版本控制

- 进行本地仓库的版本控制

  - git init 初始化 git 仓库
  - git add . 添加到暂存区
  - git commit -m '注释' 添加到版本区

- 注释规范

  - feat 特性：新增功能

  - docs 文档：新增文档
  - fix 修复 Bug

- 创建远程仓库

- 将本地仓库和远程仓库关联起来

  > git remote add origin 仓库地址

- 本地仓库将代码推送到远程仓库去

  >  git push origin master

2. 将来去公司，公司有远程仓库，拉取本地进行开发

* 第一次需要克隆代码

  > git clone git@github.com:xpromise/class191227.git

* 远程仓库更新代码

  > git pull origin master

## 库、框架和插件

1. 库：封装好特定功能代码的集合体（特定功能集合体）
2. 框架：基于自身特点提供一套较完整的解决方案
3. 插件：基于某个库/框架的库

## 渐进式

- 从底向上增量开发模式

\- 比如

\- 我只需要开发一个简单静态页面，此时只要 Vue 框架即可

\- 要开发动态页面（页面中包含与后台交互的动态数据），此时使用 axios 发送请求~

\- 将来开发更加复杂功能，引入其他库或者插件 vue-router vuex 等

## vue 使用

#### 1.引入 vue.js 文件（一旦引入，全局就有一个变量 Vue，Vue 是一个构造函数）

#### 2.创建 vue 对象 new Vue（配置对象）

- 配置对象：属性名是固定的，每个固定属性有相应的作用，不能所以更改

- 第一层属性是固定的（对象的直接属性，如 el、data）

- 第二层属性可自定义

在 new Vue 内部，会将 data 上的所有属性和 methods 上面的所有方法挂在实例对象上

```html
<div id="app">
  <!-- 指令语法 -->
  <input tpye="text" v-model="msg" />
  <!-- 模板语法 -->
  <p>{{msg}}</p>
  <!-- 静态数据是写死的 -->
  <p>hello atguigu</p>
</div>
<!-- 引入vue.js框架 -->
<script src="../js/vue.js"></script>
<script>
  const vm = new Vue({
    // 配置对象
    // el: "#app",    // 获取DOM元素 内部通过querySelector
    data: {
      // data数据：用来保存要展示在页面上的动态数据(会变化)
      msg: "atguigu",
      aaa: "aaa",
    },
  }).$mount("#app"); // 连续调用n次，链式调用 return this
  // $xxx()是实例对象的方法 实例对象上方法一般用的少
</script>
```

#### 3.模板

##### 3.1 模板页面：

 动态的 html 页面，包含一些 js 语法代码：双大括号表达式 、 指令

##### 3.2 模板语法

- 差值语法(双大括号表达式)：

  _{{JS表达式}}_

  作用：向页面输出数据（**将数据显示到标签内部**）

- 指令语法         指令：v- 开头的自定义标签属性

  1. v-model="JS 表达式"_
   * 作用：用于实现 **双向数据绑定**
  
 	2. _v-bind:xxx='yyy' //yyy 会作为表达式解析_
       * 简写： _:xxx='yyy'_
        * 作用：指定变化的属性值。**强制数据绑定** (**将数据显示在标签属性上**）
   	3. v-on:click='yyy'_
       * 简写： _@click='yyy'_
       * 作用：绑定指定事件名的回调函数。 **绑定事件监听**
  
  ```html
  <div id="app">
    <h2>1. 双大括号表达式</h2>
    <p>{{content}}</p>
  
    <h2>2. 指令一: 强制数据绑定</h2>
    <a v-bind:href="url">学习圣地</a>
    <a :href="url">学习圣地</a>
  
    <h2>3. 指令二: 绑定事件监听</h2>
    <button v-on:click="showMsg">按钮1</button>
    <button @click="showMsg">按钮2</button>
    <!-- input事件value值发生变化就触发的事件 -->
    <input type="text" @input="handleInput" />
    <!-- change事件是失去焦点并且值发生变化触发的事件 -->
    <input type="text" @change="handleChange" />
  </div>
  <script src="../js/vue.js"></script>
  <script>
    const vm = new Vue({
      // el: '#app',
      // 在new Vue内部，会将data上的所有属性和methods上面所有方法挂载到vm实例对象上
      data: {
        // data定义属性
        content: "晓飞张喜欢周冬雨",
        url: "http://www.atguigu.com",
      },
      methods: {
        // methods定义方法
        showMsg: function (event) {
          console.log("hello 晓飞张~");
        },
        // ES6对象简写方式
        handleInput(event) {
          console.log(event.target.value);
          console.log("input事件触发了~");
        },
        handleChange(event) {
          console.log(this);
          console.log("change事件触发了~");
        },
      },
    }).$mount("#app");
  </script>
  ```



**双向数据绑定**

1. 改变页面的输入，vue 会自动将页面最新的数据保存在代码 data 对应的属性上 （视图层 —> 数据层），数据由视图层（页面）流向数据层（代码---data）

2. 当 data 数据发生变化，vue 会自动将最新的数据更新到页面对应的位置上 （数据层 —> 视图层），数据由数据层流向视图层

   React 只有数据层流向视图层，叫做数据的单项绑定（单向数据流）

 **表达式和语句**

- 表达式

  - 没有分号结尾
  - 有一个结果值（返回值，可以是 undefined）

- 语句
  - 有分号结尾，如果没有分号 编译时会自动添加分号
  - 对内部数据进行操作，没有结果值

#### 4.理解 MVVM

##### MVC

 M ——> model 数据层，存放数据

 V ——> view 视图层 ，展示页面

 C ——> controller 控制层 ，复杂操作数据显示到页面上

##### MVVM

 M ——> model 数据层，存放数据

 V ——> view 视图层 ，展示页面

 VM ——> viewmodel 通过数据绑定和 DOM 事件监听实现 model 和 view 的双向数据绑定

 数据绑定： model ——> view

 DOM 事件监听：view ——> model

#### 5.this 指向

1. 函数直接调用 fn() this 指向 window

   _特殊：在 ES5 严格模式下 this 指向 undefined_

2. 函数隐式调用 obj.fn() this 指向 obj

3. 函数显示调用 fn.call/apply(obj) this 指向 obj

4. 函数 new 调用 new Fn() this 指向实例对象

5. ES6 箭头函数 this 指向离他最近一层包裹它的函数的 this（外部函数的 this）

6. 定时器回调函数 this 默认指向 window

   _特殊：在 ES5 严格模式下 this 指向 undefined_

7. DOM 事件回调函数 this 指向被绑定事件的 DOM 元素

   _特殊：在 Vue 框架中，DOM 事件回调函数的 this 指向 Vue 的实例对象 vm_

#### 6.计算属性和监视属性

1.  计算属性 ---> _当属性不能直接显示，需要通过相关属性计算后才能显示时，使用计算属性_

    - 在 computed 属性对象中定义计算属性的方法

    - 在页面中使用{{方法名}}来显示计算的结果

    - 通过 getter/setter 实现对属性数据的显示和监视，属性不需要在 data 中定义

    - 计算属性存在缓存, 多次读取只执行一次 getter 计算

2.  监视属性 ---> _监视某个属性的变化，在属性发生变化需要发送 ajax 请求时才使用_

    - 通过通过 vm 对象的\$watch()或 watch 配置来监视指定的属性，属性需要在 data 中定义

    - 当属性变化时, 回调函数自动调用, 在函数内部进行计算

    **一般使用计算属性，只有需要发送请求时使用监视属性**

```html
<div id="app">
  姓:<input type="text" placeholder="First Name" v-model="firstName" /><br />
  名: <input type="text" placeholder="Last Name" v-model="lastName" /><br />
  姓名1:<input type="text" placeholder="Full Name1" v-model="fullName1" /><br />
  姓名2:<input type="text" placeholder="Full Name2" v-model="fullName2" /><br />
</div>
<script type="text/javascript" src="../js/vue.js"></script>
<!-- //1.原生js
<script>
    const person = {
        firstName: "xiaofei",
        lastName: "zhang",
      };
     // 定义单个属性
      Object.defineProperty(person, "fullName", {
        // 属性描述符 / 元属性（描述属性的属性）
        // writable: false, // 决定属性是否可以被修改
        // configurable: false, // 决定属性是否可以重新配置/删除
        // enumerable: false, // 决定属性是否被遍历for in
        // value: "123", // 属性的值

        // 访问描述符
        // 重新属性的读取/设置的方法
        get() {// 读取属性调用的方法
          return this.firstName + "-" + this.lastName; // this指向person对象
        },
        set(value) {// 设置属性调用的方法
          const [firstName, lastName] = value.split("-");
          this.firstName = firstName;
          this.lastName = lastName;
        },
      });   
</script>
-->

<script>
  const vm = new Vue({
    data: {
      firstName: "xiaofei",
      lastName: "zhang",
      fullName2: "xiaofei-zhange", //定义监视属性监控变量
    },
    computed: {
      // 计算属性:
      fullName1: {
        get() {
          return this.firstName + "-" + this.lastName;
        },
        set(value) {
          const [firstName, lastName] = value.split("-");
          this.firstName = firstName;
          this.lastName = lastName;
        },
      },
    },
    watch: {
      // 监视属性: 这个属性必须存在data中
      firstName(newValue, oldValue) {
        // 监视data中firstName属性的变化，一旦变化就会触发当前函数
        this.fullName2 = newValue + "-" + this.lastName;
      },
      lastName(value) {
        // 监视data中lastName属性的变化，一旦变化就会触发当前函数
        this.fullName2 = this.firstName + "-" + value;
      },
      fullName2(value) {
        const [firstName, lastName] = value.split("-");
        this.firstName = firstName;
        this.lastName = lastName;
      },
    },
  }).$mount("#app");

  // 用的很少
  // vm.$watch("fullName2", function (value) {
  // const [firstName, lastName] = value.split("-");
  // this.firstName = firstName;
  // this.lastName = lastName;
  // });
</script>
```
