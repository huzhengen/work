# Vue

Vue是一套用于构建用户界面的渐进式框架。

Vue 的核心库只关注视图层

### 指令

v-bind、v-if、v-for、v-on、v-model、v-once、v-html、

### 动态参数

从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：

```
<a v-bind:[attributeName]="url"> ... </a>
<a v-on:[eventName]="doSomething"> ... </a>
```

### 修饰符

v-on:submit.prevent、

### 计算属性和侦听器

对于任何复杂逻辑，你都应当使用计算属性。computed

计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter 

计算属性缓存 vs 方法

计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。所以computed比method更优化。

在模板文件中，computed属性只需要写{{reverseMessage}}，而methods需要写成{{reverseMessage()}}，最明显的区别就是methods是方法，需要执行；

computed属性只有在依赖的data放生变化时，才会重新执行，否则会使用缓存中的值，而methods是每次进入页面都要执行的，有些需要每次进入页面都执行的方法，需要使用methods，而computed属性比较节约。

计算属性 vs 侦听属性 watch

当需要数据在异步变化或者开销较大时，执行更新，使用watch会更好一些；而computed不能进行异步操作；

computed可以用缓存中拿数据，而watch是每次都要运行函数计算，不管变量的值是否发生变化，而computed在值没有发生变化时，可以直接读取上次的值

### Class 与 Style 绑定

对象语法

```
{ active: isActive, 'text-danger': hasError }
```

```
<div v-bind:class="classObject"></div>
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```

还可以用计算属性

数组语法

```
[activeClass, errorClass]

[isActive ? activeClass : '', errorClass]

[{ active: isActive }, errorClass]
```

用在组件上

当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。

### 条件渲染

Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 key 属性即可：

```
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```

不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。

一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

> 注意，v-show 不支持 <template> 元素，也不支持 v-else。

### 列表渲染

```
<li v-for="item in items">
	{{ item.message }}
</li>
v-for="(item, index) in items"
v-for="item of items"
v-for="(value, key) in object"
v-for="(value, key, index) in object"
:key="item.id"
```

> 不要使用对象或数组之类的非原始类型值作为 v-for 的 key。用字符串或数类型的值取而代之。

> 在遍历对象时，是按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下是一致的。

数组更新检测

变异方法：

Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新。这些方法如下：

push()、pop()、shift()、unshift()、splice()、sort()、reverse()、

非变异方法：filter(), concat() 和 slice() 。这些不会改变原始数组，但总是返回一个新数组。

```
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
vm.$set(vm.items, indexOfItem, newValue)
```

对于已经创建的实例，Vue 不能动态添加根级别的响应式属性。但是，可以使用 Vue.set(object, key, value) 方法向嵌套对象添加响应式属性。

```
Vue.set(vm.userProfile, 'age', 27)
vm.$set(vm.userProfile, 'age', 27)
```

当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。

### 组件

在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例。

```
<todo-item
  v-for="item in groceryList"
  v-bind:todo="item"
  v-bind:key="item.id"
></todo-item>
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})
```

### Vue实例

虽然没有完全遵循 MVVM 模型，但是 Vue 的设计也受到了它的启发。因此在文档中经常会使用 vm (ViewModel 的缩写) 这个变量名表示 Vue 实例。

所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象 (一些根实例特有的选项除外)

当一个 Vue 实例被创建时，它向 Vue 的响应式系统中加入了其 data 对象中能找到的所有的属性。

只有当实例被创建时 data 中存在的属性才是响应式的。

### 实例生命周期钩子

created 钩子可以用来在一个实例被创建之后执行代码

beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed

生命周期钩子的 this 上下文指向调用它的 Vue 实例。

> 不要在选项属性或回调上使用箭头函数，比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())。

### 模板语法



### 过渡效果

v-enter、v-enter-active、v-enter-to、v-leave、v-leave-active、v-leave-to

```
<transition name="fade">
	<p v-if="show">hello</p>
</transition>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
```