# interview

### HTML

1、你是如何理解HTML语义化的？你用过哪些HTML5标签？

header main footer article nav section

canvas video audio

比如，段落要写成p标签，标题要写成h1-h6，文章用article，时间用time，画板用canvas标签，

1、meta viewport是做什么用的？怎么写？

控制页面在移动端不要缩小显示。

`<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, minimum-scale=1, user-scale=no">`

1、Canvas有哪些API？Canvas是如何进行绘制的？比如，如何获取到Canvas的上下文？getContext的参数是什么？Canvas和SVG的区别了解吗？

```
首先获取canvas
然后获取canvas 上下文
然后设置笔刷的颜色
设置笔刷的范围
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);
```

fillStyle

fillRect 填充矩形

strokeRect 矩形边框

clearRect 清除矩形

beginPath、closePath、stroke、fill、moveTo、lineTo

getContext() 方法来访问绘画上下文

2、用video的时候会加什么属性？

src autoplay poster track controls height loop width

### CSS

2、两种盒模型分别说一下？区别？哪个好？为什么border-box比content-box好呢？

border-box 的宽度包含了padding和border

border-box  content-box   哪一种写起来更方便

2、如何垂直居中？

flex、position、

// css回溯机制

2、flex怎么用？常用的属性有哪些？

设置在父级的属性：justify-content、align-items、flex-direction、flex-wrap、flex-flow、align-content

设置在子级的属性：order、flex-grow、flex-shrink、flex-basis、flex、align-self

2、BFC是什么？

块级格式化上下文

父级的高度比子级低，子级用float，那么如果在父级用了overflow：hidden，里面的浮动元素就会被他包裹起来。

2、css选择器优先级？

越具体优先级越高、写在后面的覆盖写在前面的、！important最高但要少用

2、清除浮动说一下？

代码 .clearfix:after{content:'';display:block/table;clear:both}

### JS

9、ES6的语法还用过哪些？分别怎么用？ES6里的getter、setter了解吗？

let、const、解构赋值、class、Promise、箭头函数、import、export

```
class Cat extends Animal{
  consturctor(){
    super()
  }
}
```

10、Promise是做什么的？一般怎么用？手写一个promise？会自己写promise吗？setTimeout封装成一个函数，用promise。promise的api，了解过吗，promise.race，promise.all，什么时候成功，什么时候失败？

Promise 最直接的好处就是链式调用。

`new Promise( function(resolve, reject) {...} /* executor */  );`

Promise.all 等待所有都完成（或第一个失败）。

Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。

Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的，即p1的结果在前，即便p1的结果获取的比p2要晚。

Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。

手写promise

```
function Promise(executor) {
    let self = this;
    self.status = 'pending'; //等待态
    self.value = undefined;  //成功的返回值
    self.reason = undefined; //失败的原因

    function resolve(value){
        if(self.status === 'pending'){
            self.status = 'resolved';
            self.value = value;
        }
    }
    function reject(reason) {
        if(self.status === 'pending') {
            self.status = 'rejected';
            self.reason = reason;
        }
    }
    try{
        executor(resolve, reject);
    }catch(e){
        reject(e);// 捕获时发生异常，就直接失败
    }
}
//onFufiled 成功的回调
//onRejected 失败的回调
Promise.prototype.then = function (onFufiled, onRejected) {
    let self = this;
    if(self.status === 'resolved'){
        onFufiled(self.value);
    }
    if(self.status === 'rejected'){
        onRejected(self.reason);
    }
}
module.exports = Promise;
```

11、手写函数防抖和函数节流？

```
防抖（debounce）
带着一起做
let timerId = null
button.onclick = function(){
  if(timerId){
    window.clearTimeout(timerId)
  }
  timerId = setTimeout(()=>{
    fn()
    timerId = null
  }, 5000)
}
function fn(){}
--------------------------------------
<input id="uid" onKeyUp="keyup()" />

let timer
let keyup = function(){
    clearTimeout(timer)
    timer = setTimeout(function(){
        // 将value发送给后端验证
    }, 800)
}
```

```
节流（throttle）
let cd = false
button.onclick = function(){
  if(!cd){
    fn()
    cd = true
    let timerId = setTimeout(()=>{
      cd = false
    }, 5000)
  }
}
function fn(){}
--------------------------------------
let cando = true
window.onscroll = function(){
    if(!cando){
        return
    }
    cando = false
    setTimeout(function(){
        hightlightMenu()
        cando = true
    }, 500)
}
```

9、手写ajax？ajax用原生js 怎么写？

```
let request = new XMLHttpRequest()
// open()函数的三个参数：请求方式、请求地址、是否异步请求(同步请求的情况极少，至今还没用到过)；
request.open('get', '/xxx') // 配置request
request.onreadystatechange = ()=>{
  if(request.readyState === 4){ 
    if(request.status >= 200 && request.status < 300){
      console.log('说明请求成功')
    }else if(request.status >= 400){
      console.log('说明请求失败') 
    }
  }
}
request.send()
```

9、this指向，this是什么

```
fn()  // this是window或者global
obj.fn()   // this是这个obj
fn.call(xxx)  // this是xxx
fn.apply(xxx)  //  this是xxx
fn.bind(xxx)   // this 是xxx
new Fn()   //  this 指向新的对象
箭头函数 fn = () => {}  // this指向的是外面的this
```

10、闭包是什么？作用有哪些？用过立即执行函数吗？是什么？

https://zhuanlan.zhihu.com/p/22486908

闭包

比如一个立即执行函数里面，声明一个变量，一个函数，函数里用到这个变量，函数和函数内能访问到的变量，就是闭包

闭包的作用   闭包常常用来「间接访问一个变量」。换句话说，「隐藏一个变量」。

立即执行函数就是    声明一个匿名函数   马上调用这个匿名函数

立即执行函数有什么用？  只有一个作用：创建一个独立的作用域。

这个作用域里面的变量，外面访问不到（即避免「变量污染」）。

9、什么是jonp，什么是cors，什么是跨域？JSONP是如何实现的？JSONP为什么不支持POST？cors说下？

跨域，指的是浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器施加的安全限制。

所谓同源是指，域名，协议，端口均相同

浏览器动态创建script标签，src指向服务器地址，同时传一个查询参数?callback=（function+随机数），服务器根据查询参数，构造一个响应，浏览器收到响应，就会执行对应的函数，从而拿到数据。

因为JSONP是通过动态创建script实现的，而动态创建script只能是GET，不能是POST。

jQuery的jsonp，jsonp和ajax没关系，为什么jQuery这样弄jsonp

```
$.ajax({
  url: 'http://jack.com:8002/pay',
  dataType: 'jsonp',
  success: function(response){
    if(response === 'success'){
      console.log(1)
    }
  }
})
```

CORS

Cross-Origin Resource Sharing

跨域资源共享

`Access-Control-Allow-Origin`

```
header('Access-Control-Allow-Origin:*');//允许所有来源访问

header('Access-Control-Allow-Method:POST,GET');//允许访问的方式
```

11、async/await怎么用？如何捕获异常？遇到reject怎么办？

当调用一个 async 函数时，会返回一个 Promise 对象。当这个 async 函数返回一个值时，Promise 的 resolve 方法会负责传递这个值；当 async 函数抛出异常时，Promise 的 reject 方法也会传递这个异常值。

async 函数中可能会有 await 表达式，这会使 async 函数暂停执行，等待 Promise  的结果出来，然后恢复async函数的执行并返回解析值（resolved）。

注意， await 关键字仅仅在 async function中有效。如果在 async function函数体外使用 await ，你只会得到一个语法错误（SyntaxError）。

11、如何实现深拷贝

关键词：递归、判断类型、检查循环引用（环）、不可能拷贝__proto__（拷贝原型是十分浪费内存的）

深拷贝和浅拷贝是只针对Object和Array这样的复杂类型的。

```
var target = {a: 1, b: 1, c: {ca: 11, cb: 12, cc: 13}};
var targetCopy = JSON.parse(JSON.stringify(target));
JSON.parse()和JSON.stringify()能正确处理的对象只有Number、String、Array等能够被json表示的数据结构，因此函数这种不能被json表示的类型将不能被正确处理。
```

https://segmentfault.com/a/1190000008637489

12、如何用正则实现trim()

```
function trim(str){
  return string.replace(/^\s+|\s+$/g, '')
}
```

11、不用class如何实现继承？用class如何实现？class怎么写？class的继承怎么写？

```
function Animal(){
  this.a = 1
}
Animal.prototype.move = function(){}
function Dog(){
  Animal.apply(this, arguments)  // 1
  this.d = 2
}
let f = function(){}  // 2
f.prototype = Animal.prototype // 2
Dog.prototype = new f() // 2
Dog.prototype.constructor = Dog // 3
Dog.say = function(){}
```

```
class Dog extends Animal{
  constructor(){
    super()
  }
}
```

11、如何实现数组去重？

```
function fn1(arr){
  let tempArr = []
  for(let i=0; i<arr.length; i++){
    if(tempArr.indexOf(arr[i]) === -1){
      tempArr.push(arr[i])
    }
  }
  return tempArr
}
```

```
function fn2(arr){
  let tempArr = []
  let hash = {}
  for(let i=0; i<arr.length; i++){
    if(!hash[arr[i]]){
      hash[arr[i]] = true
      tempArr.push(arr[i])
    }
  }
  return tempArr
}
```

使用hash

`let newArr = [...new Set(array)]`

WeakMap（支持所有类型的去重）

### DOM

9、事件委托？用mouse事件写一个可拖曳的div？

```
function(element, eventType, selector, fn) {
  element.addEventListener(eventType, e => {
    let el = e.target
    while (!el.matches(selector)) {
      if (element === el) {
        el = null
        break
      }
      el = el.parentNode
    }
    el && fn.call(el, e, el)
  })
  return element
}
```

### HTTP

### 其他

9、有尝试封装axios吗？封装axios。   usermodel.create、usermodel.delete，怎么封装？

9、小程序的文件格式？最主要的一个文件app.json。小程序封装接口？小程序相对于app、网页有什么优劣？请求封装、文件大小限制？

9、数据可视化常用的最入门的库有哪些吗？听说过echarts、d3.js吗？

10、call apply bind 区别

call()方法接受的是若干个参数的列表，

而apply()方法接受的是一个包含多个参数的数组。

bind()方法创建一个新的函数，在调用时设置this关键字为提供的值。并在调用新函数时，将给定参数列表作为原函数的参数序列的前若干项。

11、响应式实现方式？

12、如果让你实现一个jQuery的addClass的api，你怎么实现？

13、模块化了解过吗？

14、webpack了解过吗？

15、滚动事件，可以阻止他的默认事件吗？（滚轮事件？）

16、前端工程化，你用的什么前端工程化的工具？webpack的loader是什么？干什么用的？

webpack允许我们使用loader来处理文件

webpack常用的loader

样式：style-loader、css-loader、less-loader、sass-loader等

文件：raw-loader、file-loader 、url-loader等

编译：babel-loader、coffee-loader 、ts-loader等

校验测试：mocha-loader、jshint-loader 、eslint-loader等

17、less和scss的语法你了解吗？在scss里面你如何声明一个mixin，怎么使用？

```
@mixin box($width:100px, $height:100px) {
    width: $width;
    height: $height;
    box-shadow: 0 0 5px #000;
    margin: 10px;
}
@include box(300px,300px);

%box {
    box-shadow: 0 0 5px #000;
    margin: 10px;
}
@extend %box;
```

18、用原型写过class吗？prototype里面的方法和this里面的方法有什么区别？

21、什么是函数式编程？

21、Vue组件的生命周期的哪些钩子函数

22、Vue组件之间消息传递是怎样传的？（父子、兄弟）。给弟弟传一个消息怎么传？在接受子组件的时候，还额外的想再写一个参数，怎么传？不相关的组件之间怎么传递？

23、Vue生成的实例，他的原型在哪里？

25、HTML5里的section和article有什么区别？

26、css的flex布局，如何上下居中，左右居中？

27、响应式页面，rem和em 的区别是什么？

28、原生js如何获取一个节点的兄弟节点，不包括他自己？

29、什么是事件委托？

30、Eventloop说一下？

31、vue ssr

预渲染 如果你使用 webpack，你可以使用 prerender-spa-plugin 轻松地添加预渲染。

2、一个用户完整的注册流程是怎样的？如何知道用户填写的email是正确格式？为什么前端做了验证，后端还要做？

用MD5加密是正确的吗？不是，因为现在大家都知道MD5加密是不安全的。可以用bcrypt加密、SHA256加密。

3、你知道png和jpg格式的区别吗？

png是无损的，文件大

jpg牺牲画质，文件小

4、留言板功能是如何防止我输入脚本进行攻击的？（脚本比如<script>alert(1)</script>）。为什么单引号过滤，双引号不过滤？

过滤一些特殊符号，防止XSS攻击。

5、说一下你对MVC的理解？向服务器请求放在MVC的哪个里面？什么是mvvm？Observer设计模式是啥？干什么用的？

6、LeanCloud是什么？

7、Vue 的双向绑定是如何实现的？（Object.defineProperty）v-model相当于哪两个指令？（v-bind:value，监听一个input事件）

Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

`Object.defineProperty(obj, prop, descriptor)`

当你把一个普通的 JavaScript 对象传给 Vue 实例的 data 选项，Vue 将遍历此对象所有的属性，并使用 `Object.defineProperty` 把这些属性全部转为 getter/setter。Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是为什么 Vue 不支持 IE8 以及更低版本浏览器。

每个组件实例都有相应的 watcher 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。

Vue 不允许在已经创建的实例上动态添加新的根级响应式属性 (root-level reactive property)。然而它可以使用 Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上：

```
Vue.set(vm.someObject, 'b', 2)
```

您还可以使用 vm.$set 实例方法，这也是全局 Vue.set 方法的别名：

```
this.$set(this.someObject,'b',2)
```

8、Vue 的父子组件是如何通信的？儿子如何向父亲传数据？

8、用了vue的哪些周边、全家桶？Vue Router vuex，vue响应式原理，你知道vue3会怎么更新这个api吗（object.defineProperty）？

8、axios拦截器了解吗？

https://www.kancloud.cn/yunye/axios/234845

https://createwj.github.io/2018/05/21/106.axioslan%E6%8B%A6%E6%88%AA%E5%99%A8/

https://juejin.im/post/5bab739af265da0aa3593177

```
import axios from 'axios';
import router from './router';

// axios 配置
axios.defaults.timeout = 8000;
axios.defaults.baseURL = 'https://api.github.com';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (localStorage.token) { //判断token是否存在
      config.headers.Authorization = localStorage.token;  //将token设置成请求头
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.errno === 999) {
      router.replace('/');
      console.log("token过期");
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
export default axios;
```

8、Vue computed、watch、methods，这三个有什么区别？watch、computed有缓存吗？watch和computed还有其他实用场景的区别吗？

8、Vue.$set知道吗，用过吗？这个api是干嘛的？

8、VueRouter路由守卫了解吗？

8、Vuex用的比较多的api是什么？mutation和action的区别？

9、计数排序、选择排序、冒泡排序

9、HTTP协议缓存有哪些？expire、cache-control，怎么用？如果一个文件被cache-control缓存了1年，这个css的状态码，请求状态的什么样的？通过304做到类似的效果知道吗？（ETag，LastModified）

[ES2016, 2017和2018到底有哪些新功能？](https://mp.weixin.qq.com/s/A4Z8D3IlSsw1XnP3wFbJHg)