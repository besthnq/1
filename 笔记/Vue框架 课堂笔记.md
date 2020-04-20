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

  > git push origin master

2. 将来去公司，公司有远程仓库，拉取本地进行开发

- 第一次需要克隆代码

  > git clone git@github.com:xpromise/class191227.git

- 远程仓库更新代码

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

#### 3.模板

##### 3.1 模板页面：

动态的 html 页面，包含一些 js 语法代码：双大括号表达式 、 指令

##### 3.2 模板语法

- 差值语法(双大括号表达式)：

  _{{JS表达式}}_

  作用：向页面输出数据（**将数据显示到标签内部**）

- 指令语法 指令：v- 开头的自定义标签属性

  1. v-model="JS 表达式"\_

  - 作用：用于实现 **双向数据绑定**
  - 常用于表单中自动收集数据，表单中注意value设定

  2. v-bind:xxx="yyy"\_

    - 简写： _:xxx='yyy'_
    - 作用：指定变化的属性值。**强制数据绑定** (**将数据显示在标签属性上**）
  3. v-on:click='yyy'\_
    - 简写： _@click='yyy'_
    - 作用：绑定指定事件名的回调函数。 **绑定事件监听**
    - 4种传参情况：
      - 如果函数不需要其他参数，或者只需要event参数    >>  *@click='method'*
      - 如果函数不需要event参数，只需要其他参数    >>  *@click="method('a','b')"*
      - 如果函数既需要event参数，也需要其他参数    >>  *@click="method('c',$event)"*
      - 如果事件回调函数只有一条语句,（默认去this中找xxx属性，此处不能写this）    >>  *@click="xxx=yyy"*
    - 事件修饰符：
      - 阻止事件默认行为：event.preventDefault()    >>  *@click.prevent="method"*
      - 阻止事件冒泡：event.stopPropagation()    >>  *@click.stop="method"*
    - 按键修饰符：
      - *@keyup.13="method"*

  4. **条件渲染指令** *v-if  v-else  v-show*
   - v-if和v-else是配合使用的：
      - 当v-if是true时，就会显示，而v-else就隐藏；
      - 当v-if是false时，就会隐藏，而v-else就显示；
      - 当属性值是true时，往往可以省略不写
  - v-if 和 v-show 的区别
    - 相同：能实现DOM元素切换显示
    - 不同：v-if 在内存中删除标签对象来实现隐藏，重新显示时会重新创建。DOM树中只有要显示的DOM元素，没有隐藏的；  v-show 通过样式display来控制显示和隐藏的，显示标签没有样式，隐藏标签会加上 display: none。DOM树中所有DOM元素都有，只是隐藏的DOM元素有一个隐藏样式而已
  如果要频繁切换样式显示，选择 v-show。
  因为v-if要进行更多DOM操作：删除DOM元素，重新创建新的DOM元素，而v-show只要切换style样式即可
  5. **列表渲染指令**   *v-for*
   - v-for 遍历数组
     - <li v-for="(person, index) in persons" :key="person.id">{{xxx}}</li>
   - v-for 遍历对象
     - <li v-for="(value, key) in person" :key="key">{{xxx}}</li>
   - **注意：遍历的每一项元素需要有一个唯一的key属性：值有id用id，没有id考虑使用index**





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

#### 6.计算属性和监视属性详解

1.  计算属性 ---> _当属性不能直接显示，需要通过相关属性计算后才能显示时，使用计算属性_

    - 在 computed 属性对象中定义计算属性的方法
- 在页面中使用{{方法名}}来显示计算的结果
    - 通过 getter/setter 实现对属性数据的显示和监视，属性不需要在 data 中定义
- 计算属性存在缓存, 多次读取只执行一次 getter 计算
    - 计算属性：一上来会触发一次，得到结果显示到页面上；当内部依赖的值（参与计算data的值）发生变化，也会继续触发；否则使用缓存（如果内部的值没有变化，此时读取会使用上一次的缓存结果，不会重新计算）。

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
### Vue 基本语法

```vue
const vm = new Vue(配置对象)

el 值：元素选择器 作用：获取vm要挂载的DOM元素。$mount() 可以取代~
data 值：对象
作用：保存要渲染到模板页面的动态数据（一般数据/非函数数据）

methods 值：对象
作用：保存要渲染到模板页面的方法（函数数据）

computed 值：对象
作用：保存计算属性（定义属性getter和setter）

什么时候使用计算属性？当需要使用属性要通过计算才能使用（data中不用定义这个属性）
理解：计算属性是一种特殊的data，每次取值需要先计算才能得到~

watch 值：对象
作用：监视某个data属性的变化
什么时候使用watch属性？当data属性变化时需要发送AJAX请求，才需要使用（data中必须定义这个属性）
$watch 可以取代

特点：data和methods上的属性和方法，最终都会直接挂载到vm/this/Vue实例对象上~
```



#### 7.class和style绑定

作用：class/style绑定就是专门用来实现动态样式效果的

**class绑定: :class='xxx'**

* xxx是字符串 ：一般用于类名不确定时
* xxx是对象：一般用于类名确定时
* xxx是数组：一般用于多个确定的动态类名

**style绑定：**  *:style="{ color: activeColor, fontSize: fontSize + 'px' }"*

* Vue的style语法: 是一个对象形式，里面所有属性名都采用小驼峰命名法
* 其中activeColor/fontSize是data属性
  
#### 8.数组方法比较 filter、map、reduce
* filter  长度变值不变
  * 返回一个新数组，不会对原数组产生任何影响（不会修改原数组）
  * 特点：新数组长度往往比原数组更少，但里面的值和原来的一定一样
* map 长度不变值变
  * 返回一个新数组，不会对原数组产生任何影响（不会修改原数组）
  * 特点：新数组长度和原数组一定一样，但里面的值往往会发生变化
* reduce 长度和值都变
  * 语法：arr.reduce((previousValue, currentValue) => {}, initValue)
  * 如果希望reduce方法返回值是number类型，initValue往往初始化为 0
  * 如果希望reduce方法返回值是object类型，initValue往往初始化为 {}
  * 如果希望reduce方法返回值是array类型，initValue往往初始化为 []
  * 如果希望reduce方法返回值是string类型，initValue往往初始化为 ''


#### 9.Vue实例对象的生命周期函数
Vue的实例从创建到更新到死亡经历的回调函数，由vue内部自己调用。
**Vue对象的生命周期分3个阶段：**
* 初始化渲染阶段（new Vue()产生，只会执行1次）
  * beforeCreate
    * 此时已经创建了vm，是在实现数据代理和监听之前调用
    * 不能访问data/methods数据
  * created
    * 在实现数据代理和监听之后调用
    * 可以访问所有数据
  * beforeMount
    * 在页面挂载（渲染）之前触发
  * mounted
    * 在页面挂载（渲染）之后触发
* 更新阶段（当data数据发生变化，就会自动更新, 触发n次）
  * beforeUpdate
    * 在更新之前触发
    * 此时data数据已经更新完毕，但是页面没有更新
  * updated
    * 在更新之后触发
    * data数据更新完毕，页面也更新完毕
* 销毁/死亡阶段 (this/vm.$destroy()触发，触发1次 )
  * beforeDestroy
    * 在销毁之前调用
  * destroyed
    * 在销毁之后调用
  注：当调用this.$destroy()时，会自动解绑事件，所以没有DOM事件的内存泄漏。定时器需要手动清除。
  
  **开发中常用的重要生命周期函数**
  * created / mounted （created速度更快一点）
    * 发送AJAX请求、设置定时器等一次性任务
  * beforeDestroy
    * 做一些收尾工作：取消AJAX请求，清除定时器等
  


  内存泄漏：数据占用内容，但无实际用途。DOM事件、定时器、意外全局变量等
  内存溢出：预期使用的内存，超出实际内存
